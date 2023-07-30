class UserHandler {
  constructor(usersService, validator, imageValidator) {
    this.usersService = usersService;
    this.validator = validator;
    this.imageValidator = imageValidator;
  }

  async postAdminHandler(request, h) {
    await this.usersService.addAdmin();
    const response = h
      .response({
        status: 'success',
        message: 'API store can be used',
      })
      .code(200);

    return response;
  }

  async postUserHandler(request, h) {
    this.validator.validateUserPayload(request.payload);
    const userId = await this.usersService.addUser(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Akun berhasil dibuat',
        data: {
          userId,
        },
      })
      .code(201);
    return response;
  }

  async postUserCollaboratorHandler(request, h) {
    this.validator.validateUserPayload(request.payload);
    this.imageValidator.validateImageHeaders(request.payload.image.hapi.headers);
    const userId = await this.usersService.addCollaborator(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Akun collaborator berhasil dibuat',
        data: {
          userId,
        },
      })
      .code(201);
    return response;
  }

  async getUsersHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(userId);
    const users = await this.usersService.getUsers();
    const response = h
      .response({
        status: 'success',
        data: users,
      })
      .code(201);
    return response;
  }

  async getUserByIdHandler(request, h) {
    const { id: userId } = request.params;
    const user = await this.usersService.getUserById(userId);
    const response = h
      .response({
        status: 'success',
        data: user,
      })
      .code(201);
    return response;
  }

  async putUserByIdHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    this.validator.validatePutUserPayload(request.payload);
    this.imageValidator.validateImageHeaders(request.payload.image.hapi.headers);
    await this.usersService.putUserById(userId, request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Profil berhasil diperbarui',
        id: userId,
      })
      .code(200);
    return response;
  }

  async deleteUserByIdHandler(request, h) {
    const { id: userId } = request.params;
    const user = await this.usersService.deleteUser(userId);
    const response = h
      .response({
        status: 'success',
        data: user,
      })
      .code(201);
    return response;
  }
}

export default UserHandler;
