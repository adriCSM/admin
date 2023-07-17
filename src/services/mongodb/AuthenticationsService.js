import Authentication from '../../../model/Authentications_db.js';
import User from '../../../model/Users_db.js';
import InvariantError from '../../Error/InvariantError.js';

class AuthenticationsService {
  constructor() {
    this.db = Authentication;
    this.user_db = User;
  }

  async checkRefreshTokenExistAndDelete(userId) {
    const result = await this.db.find({ user_id: userId });
    if (result.length) {
      await this.db.deleteOne({
        user_id: userId,
      });
    }
  }

  async addRefreshToken(userId, refreshToken) {
    await this.checkRefreshTokenExistAndDelete(userId);
    await this.db.create({
      user_id: userId,
      token: refreshToken,
    });
  }

  async verifyRefreshToken(refreshToken) {
    const result = await this.db.find({
      token: refreshToken,
    });
    if (!result.length) {
      throw new InvariantError('Refresh token tidak valid.');
    }
  }

  async deleteRefreshToken(userId) {
    await this.user_db.findByIdAndUpdate(
      { _id: userId },
      {
        isOnline: false,
      },
    );
    await this.db.findOneAndDelete({
      user_id: userId,
    });
  }
}

export default AuthenticationsService;
