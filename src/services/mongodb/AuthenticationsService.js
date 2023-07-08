const Authentication = require('../../../model/Authentications_db');
const User = require('../../../model/Users_db');
const InvariantError = require('../../Error/InvariantError');

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

  async deleteRefreshToken(user_id) {
    await this.user_db.findByIdAndUpdate(
      { _id: user_id },
      {
        isOnline: false,
      },
    );
    await this.db.findOneAndDelete({
      user_id,
    });
  }
}

module.exports = AuthenticationsService;
