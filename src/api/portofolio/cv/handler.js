class CvHandlers {
  constructor(usersService, cvService, validator) {
    this.usersService = usersService;
    this.validator = validator;
    this.cvService = cvService;
  }

  async addCvHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    this.validator.validatePostCvPayload(request.payload);
    this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    const cvId = await this.cvService.addCv(request.payload);
    const response = h
      .response({
        status: 'success',
        data: { cvId, message: 'Cv berhasili ditambahkan' },
      })
      .code(200);
    return response;
  }

  async putCvHandler(request, h) {
    const { id: cvId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    this.validator.validatePostCvPayload(request.payload);
    this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    await this.cvService.putCv(cvId, request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Cv berhasil diperbarui',
      })
      .code(200);
    return response;
  }

  async getCvsHandler(request, h) {
    const cvs = await this.cvService.getCvs(request.payload);
    const response = h
      .response({
        status: 'success',
        data: cvs,
      })
      .code(200);
    return response;
  }

  async getCvHandler(request, h) {
    const image = await this.cvService.getCv(request.query);
    const response = h
      .response({
        status: 'success',
        data: image,
      })
      .code(200);
    return response;
  }

  async getCvMetadataHandler(request, h) {
    const metadata = await this.cvService.getMetadata(request.params.id);
    const response = h
      .response({
        status: 'success',
        data: metadata,
      })
      .code(200);
    return response;
  }

  async deleteCvHandler(request, h) {
    const { id: cvId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    await this.cvService.deleteCv(cvId);
    const response = h
      .response({
        status: 'success',
        message: 'Cv berhasil dihapus',
      })
      .code(200);
    return response;
  }
}

export default CvHandlers;
