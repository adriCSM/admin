class CertificateHandlers {
  constructor(certificatesService, usersService, validator) {
    this.certificatesService = certificatesService;
    this.usersService = usersService;
    this.validator = validator;
  }

  async postCertificateHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    this.validator.validatePostCertificatePayload(request.payload);
    this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    const certificateId = await this.certificatesService.addCertificate(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Berhasil menambahkan certificate',
        data: { certificateId },
      })
      .code(201);
    return response;
  }

  async getCertificatesHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const certificates = await this.certificatesService.getCertificates();
    const response = h
      .response({
        status: 'success',
        data: { certificates },
      })
      .code(200);
    return response;
  }

  async getCertificateHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: certificateId } = request.params;
    const certificate = await this.certificatesService.getCertificate(certificateId);
    const response = h
      .response({
        status: 'success',
        data: certificate,
      })
      .code(200);
    return response;
  }
  async getMetadataImageHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: certificateId } = request.params;
    const metadata = await this.certificatesService.getMetadata(certificateId);
    const response = h
      .response({
        status: 'success',
        data: metadata,
      })
      .code(200);
    return response;
  }
  async putCertificateHandler(request, h) {
    const { id: certificateId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    this.validator.validatePutCertificatePayload(request.payload);
    this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    await this.certificatesService.putCertificate(certificateId, request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Certificate berhasil diperbarui',
      })
      .code(200);
    return response;
  }

  async deleteCertificateHandler(request, h) {
    const { id: certificateId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    await this.certificatesService.deleteCertificate(certificateId, request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Certificate berhasil dihapus',
      })
      .code(200);
    return response;
  }
}

module.exports = CertificateHandlers;
