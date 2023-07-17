import ClientError from './CLientError.js';

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
