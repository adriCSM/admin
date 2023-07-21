import Contact from '../../../../model/portofolio/Contact_db.js';
import InvariantError from '../../../Error/InvariantError.js';

class ContactService {
  constructor() {
    this.db = Contact;
  }

  async addMessage({ name, email, mobileNumber, message }) {
    const result = await this.db.create({
      name,
      email,
      mobile_number: mobileNumber,
      message,
    });
    if (!result) {
      throw new InvariantError('Gagal mengirim pesan');
    }
    return result.id;
  }

  async getMessages() {
    const result = await this.db.find();
    if (!result) {
      throw new InvariantError('Pesan tidak ditemukan');
    }
    return result;
  }

  async deleteMessage(id) {
    const result = await this.db.findOneAndDelete({ _id: id });
    if (!result) {
      throw new InvariantError('Gagal menghapus pesan');
    }
  }
}

export default ContactService;
