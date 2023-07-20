import Cv from '../../../../model/portofolio/Cv_db.js';
import InvariantError from '../../../Error/InvariantError.js';

export default class CvService {
  constructor(firebaseService) {
    this.db = Cv;
    this.firebaseService = firebaseService;
  }

  async getMetadata(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    const metadata = await this.firebaseService.metadataWithUrl(result.image);
    return metadata;
  }

  async uploadImageInFirebase(payload) {
    const { _data: data } = payload.image;
    const fileBuffer = data;
    const metadata = {
      contentType: payload.image.hapi.headers['content-type'],
    };
    const url = await this.firebaseService.addImage(payload.name, fileBuffer, metadata);
    return url;
  }

  async addCv({ name, image }) {
    const imageName = `${name}_${new Date().getTime()}`;
    const url = await this.uploadImageInFirebase({ name: imageName, image });
    const result = await this.db.create({ image: url, name });
    if (!result) {
      throw new InvariantError('Cv gagal ditambahkan');
    }
    return result.id;
  }

  async getCvs() {
    const result = await this.db.find();

    if (!result) {
      throw new InvariantError('Cv tidak ditemukan');
    }
    return result;
  }

  async getCv({ id, name }) {
    let result;
    if (id) {
      const response = await this.db.findOne({ _id: id });
      result = response;
    } else {
      const response = await this.db.findOne({ name });
      result = response;
    }
    if (!result) {
      throw new InvariantError('Cv tidak ditemukan');
    }
    return result;
  }

  async putCv(id, { name, image }) {
    const imageName = `${name}_${new Date().getTime()}`;
    const cv = await this.getCv({ id });
    await this.firebaseService.deleteImageWithURL(cv.image);
    const url = await this.uploadImageInFirebase({ name: imageName, image });
    const result = await this.db.findOneAndUpdate(
      { _id: id },
      {
        name,
        image: url,
      },
    );
    if (!result) {
      throw new InvariantError('Gagal memperbarui certificate');
    }
  }

  async deleteCv(id) {
    const result = await this.db.findOneAndDelete({ _id: id });
    await this.firebaseService.deleteImageWithURL(result.image);
    if (!result) {
      throw new InvariantError('Cv gagal dihapus');
    }
  }
}
