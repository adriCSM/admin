class ProjectHandlers {
  constructor(projectsService, usersService, validator) {
    this.projectsService = projectsService;
    this.usersService = usersService;
    this.validator = validator;
  }

  async postProjectHandler(request, h) {
    await this.validator.validatePostProjectPayload(request.payload);
    await this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const projectId = await this.projectsService.addProject(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Berhasi menambahkan project',
        data: { projectId },
      })
      .code(201);
    return response;
  }

  async getProjectsHandler(request, h) {
    const projects = await this.projectsService.getProjects();
    const response = h
      .response({
        status: 'success',
        data: { projects },
      })
      .code(200);
    return response;
  }

  async getProjectHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: projectId } = request.params;
    const project = await this.projectsService.getProject(projectId);
    const response = h
      .response({
        status: 'success',
        data: project,
      })
      .code(200);
    return response;
  }

  async getMetadataImageHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: certificateId } = request.params;
    const metadata = await this.projectsService.getMetadata(certificateId);
    const response = h
      .response({
        status: 'success',
        data: metadata,
      })
      .code(200);
    return response;
  }

  async putProjectHandler(request, h) {
    await this.validator.validatePutProjectPayload(request.payload);
    await this.validator.validateImageHeadersPayload(request.payload.image.hapi.headers);
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: projectId } = request.params;
    await this.projectsService.putProject(projectId, request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Project berhasil diperbarui',
      })
      .code(200);
    return response;
  }

  async deleteProjectHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const { id: projectId } = request.params;
    await this.projectsService.deleteProject(projectId);
    const response = h
      .response({
        status: 'success',
        message: 'Project berhasil dihapus',
      })
      .code(200);
    return response;
  }
}

module.exports = ProjectHandlers;
