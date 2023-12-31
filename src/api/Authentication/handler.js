export default class AuthenticationHandler {
  constructor(AuthenticationsService, usersService, tokenManager, validator) {
    this.authenticationsService = AuthenticationsService;
    this.usersService = usersService;
    this.tokenManager = tokenManager;
    this.validator = validator;
  }

  async postAuthenticationHandler(request, h) {
    this.validator.validatePostAuthenticationPayload(request.payload);
    const { email, password } = request.payload;
    const id = await this.usersService.verifyUserCredential(email, password);
    const refreshToken = this.tokenManager.generateRefreshToken({ id });
    const accessToken = this.tokenManager.generateAccessToken({ id });
    await this.authenticationsService.addRefreshToken(id, refreshToken);
    const response = h
      .response({
        status: 'success',
        data: {
          refreshToken,
          accessToken,
        },
      })
      .code(201);
    return response;
  }

  async putAuthenticationHandler(request, h) {
    this.validator.validatePutAuthenticationPayload(request.payload);
    const { refreshToken } = request.payload;
    await this.authenticationsService.verifyRefreshToken(refreshToken);
    const { id } = this.tokenManager.verifyRefreshTokenSignature(refreshToken);
    const accessToken = this.tokenManager.generateAccessToken({ id });

    const response = h
      .response({
        status: 'success',
        data: {
          accessToken,
        },
      })
      .code(200);
    return response;
  }

  async deleteAuthenticationHandler(request, h) {
    this.validator.validateDeleteAuthenticationPayload(request.params);
    const { refreshToken } = request.params;
    const { id: userId } = request.auth.credentials;
    await this.tokenManager.verifyRefreshTokenSignature(refreshToken);
    await this.authenticationsService.deleteRefreshToken(userId);
    const response = h
      .response({
        status: 'success',
        message: 'Token berhasil dihapus',
      })
      .code(200);
    return response;
  }
}
