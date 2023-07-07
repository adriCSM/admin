const Project = require('../../../../model/portofolio/Projects_db');
const InvariantError = require('../../../Error/InvariantError');
const NotFoundError = require('../../../Error/NotFoundError');

class ProjectsService {
  constructor(firebaseService) {
    this.db = Project;
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

  async addProject({ name, description, image, url_site }) {
    const image_name = name + '_' + new Date().getTime();
    const url = await this.uploadImageInFirebase({ name: image_name, image });
    const result = await this.db.create({
      name,
      description,
      image: url,
      image_name,
      url_site,
    });
    if (!result) {
      throw new InvariantError('Gagal menambahkan ptoject');
    }
    return result.id;
  }

  async getProjects() {
    const result = await this.db.find().select('-__v');
    return result;
  }

  async getProject(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    if (!result) {
      throw new NotFoundError('Project tidak ditemukan');
    }
    return result;
  }

  async putProject(id, { name, description, image, url_site }) {
    const image_name = name + '_' + new Date().getTime();
    const oldProjectDetile = await this.getProject(id);
    const oldFileName = oldProjectDetile.image_name;
    if (image.hapi.filename == oldFileName) {
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          description,
          url_site,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui project');
      }
    } else {
      await this.firebaseService.deleteImage(oldFileName);
      const url = await this.uploadImageInFirebase({ name: image_name, image });
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          description,
          image: url,
          image_name,
          url_site,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui project');
      }
    }
  }

  async deleteProject(id) {
    const result = await this.db.findOneAndDelete({ _id: id });
    const oldName = result.image_name;
    await this.firebaseService.deleteImage(oldName);
    if (!result) {
      throw new InvariantError('Project gagal dihapus');
    }
  }
}

module.exports = ProjectsService;
