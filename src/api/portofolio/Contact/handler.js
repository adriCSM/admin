class ContactHandler {
  constructor(contactService, usersService, validator) {
    this.contactService = contactService;
    this.usersService = usersService;
    this.validator = validator;
  }

  async addMessageHandler(request, h) {
    this.validator.validatePostContactPayload(request.payload);
    const messageId = await this.contactService.addMessage(request.payload);
    const response = h
      .response({
        status: 'success',
        message: 'Pesan terkirim',
        data: { messageId },
      })
      .code(201);
    return response;
  }

  async getMessagesHandler(request, h) {
    const { id } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(id);
    const messages = await this.contactService.getMessages();
    const response = h
      .response({
        status: 'success',
        data: { messages },
      })
      .code(200);
    return response;
  }

  async deleteMessageHandler(request, h) {
    const { id: messageId } = request.params;
    const { id } = request.auth.credentials;
    await this.usersService.verifyAdminAndCollaborator(id);
    await this.contactService.deleteMessage(messageId);
    const response = h
      .response({
        status: 'success',
        message: 'Pesan berhasil dihapus',
      })
      .code(200);
    return response;
  }
}

export default ContactHandler;
