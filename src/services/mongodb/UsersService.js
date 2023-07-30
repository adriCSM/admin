import bcrypt from 'bcrypt';
import User from '../../../model/Users_db.js';
import InvariantError from '../../Error/InvariantError.js';
import AuthenticationError from '../../Error/AuthenticationError.js';
import NotFoundError from '../../Error/NotFoundError.js';
import AuthorizationError from '../../Error/AuthorizationError.js';

class UsersService {
  constructor(firebaseService) {
    this.db = User;
    this.firebaseService = firebaseService;
  }

  async uploadImageInFirebase(payload) {
    const fileBuffer = payload.image.data;
    const metadata = {
      contentType: payload.image.hapi.headers['content-type'],
    };
    const url = await this.firebaseService.addImage(payload.name, fileBuffer, metadata);
    return url;
  }

  async checkRole() {
    const result = await this.db.find({ role: 'admin' });
    return result;
  }

  async addAdmin() {
    const admin = await this.checkRole();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash('admin', salt);
    if (!admin.length) {
      await this.db.create({
        username: 'admin',
        phone_number: '081234567890',
        email: 'admin@gmail.com',
        password: hashPassword,
        role: 'admin',
      });
    }
  }

  async checkEmailExist(email) {
    const result = await this.db.find({ email });
    if (result.length) {
      throw new InvariantError('Email sudah digunakan');
    }
  }

  async addUser({ username, phoneNumber, email, password, confirmPassword }) {
    await this.checkEmailExist(email);

    if (password !== confirmPassword) {
      throw new InvariantError('Password dan confirmPassword tidak sesuai.');
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await this.db.create({
      username,
      phone_number: phoneNumber,
      email,
      password: hashPassword,
      role: 'user',
    });

    if (!result) {
      throw new InvariantError('Gagal membuat akun');
    }
    return result.id;
  }

  async addCollaborator({ username, phoneNumber, email, password, confirmPassword }) {
    await this.checkEmailExist(email);
    if (password !== confirmPassword) {
      throw new InvariantError('Password dan confirmPassword tidak sesuai.');
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await this.db.create({
      username,
      phone_number: phoneNumber,
      email,
      password: hashPassword,
      role: 'collaborator',
    });

    if (!result) {
      throw new InvariantError('Gagal membuat akun collaborator');
    }
    return result.id;
  }

  async getUsers() {
    const result = await this.db.find().select('-password');
    return result;
  }

  async getUserById(userId) {
    const result = await this.db
      .findOne({ _id: userId })
      .select('-password -_id -createdAt -updatedAt -__v');
    return result;
  }

  async getMetadata(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    const metadata = await this.firebaseService.metadataWithUrl(result.pic);
    return metadata;
  }

  async editUser(id, { name, username, phoneNumber, email, image }) {
    const imageName = `${username}_${new Date().getTime()}`;
    const user = await this.getUserById(id);
    await this.firebaseService.deleteImageWithURL(user.pic);
    const metadata = await this.getMetadata(id);
    if (image.hapi.filename === metadata.name) {
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          username,
          phoneNumber,
          email,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui project');
      }
    } else {
      await this.firebaseService.deleteImageWithURL(user.pic);
      const url = await this.uploadProductImageInFirebase({ name: imageName, image });
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          username,
          phoneNumber,
          email,
          pic: url,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui CV');
      }
    }
  }

  async deleteUser(userId) {
    const result = await this.db.findOneAndDelete({ _id: userId });
    await this.firebaseService.deleteImageWithURL(result.image);
    if (!result) {
      throw new InvariantError('Gagal menghapus user');
    }
  }

  async verifyUserCredential(email, password) {
    const result = await this.db.findOne({ email });
    if (!result) {
      throw new AuthenticationError('Email tidak valid');
    }
    const match = await bcrypt.compare(password, result.password);
    if (!match) {
      throw new AuthenticationError('Password tidak valid');
    }
    await this.db.findOneAndUpdate(
      { _id: result.id },
      {
        isOnline: true,
      },
    );
    return result.id;
  }

  async verifyAdminAndCollaborator(userId) {
    const result = await this.db.findOne({ _id: userId });

    if (!result) {
      throw new NotFoundError('User tidak ditemukan');
    }
    const match = result.role === 'admin' || result.role === 'collaborator';
    if (!match) {
      throw new AuthorizationError('Anda tidak berhak mengakses resource ini');
    }
  }
}

export default UsersService;
