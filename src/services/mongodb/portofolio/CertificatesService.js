const Certificate = require('../../../../model/portofolio/Certificates_db');
const InvariantError = require('../../../Error/InvariantError');
const NotFoundError = require('../../../Error/NotFoundError');

class CertificateServices {
  constructor(firebaseService) {
    this.db = Certificate;
    this.firebaseService = firebaseService;
  }

  async getMetadata(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    const metadata = await this.firebaseService.metadata(result.image_name);
    return metadata;
  }

  async uploadImageInFirebase(payload) {
    const fileBuffer = payload.image._data;
    const metadata = {
      contentType: payload.image.hapi.headers['content-type'],
    };
    const url = await this.firebaseService.addImage(payload.name, fileBuffer, metadata);
    return url;
  }

  async addCertificate({ name, image }) {
    const image_name = name + '_' + new Date().getTime();
    const url = await this.uploadImageInFirebase({ name: image_name, image });
    const result = await this.db.create({
      name,
      image: url,
      image_name,
    });
    if (!result) {
      throw new InvariantError('Gagal menambahkan certificate');
    }
    return result.id;
  }

  async getCertificates() {
    const result = await this.db.find().select('-__v');
    return result;
  }

  async getCertificate(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    if (!result) {
      throw new NotFoundError('Cerificate tidak ditemukan');
    }
    return result;
  }

  async putCertificate(id, { name, image }) {
    const image_name = name + '_' + new Date().getTime();
    const oldCertificateDetile = await this.getCertificate(id);
    const oldFileName = oldCertificateDetile.image_name;
    if (image.hapi.filename == oldFileName) {
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui certificate');
      }
    } else {
      await this.firebaseService.deleteImage(oldFileName);
      const url = await this.uploadImageInFirebase({ name: image_name, image });
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          image: url,
          image_name,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui certificate');
      }
    }
  }

  async deleteCertificate(id) {
    const result = await this.db.findOneAndDelete({ _id: id });
    const oldName = result.image_name;
    await this.firebaseService.deleteImage(oldName);
    if (!result) {
      throw new InvariantError('Cerificate gagal dihapus');
    }
  }
}

module.exports = CertificateServices;
