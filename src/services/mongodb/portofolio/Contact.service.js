import Contact from '../../../../model/portofolio/Contact_db.js';
import InvariantError from '../../../Error/InvariantError.js';
import axios from 'axios';

class ContactService {
  constructor() {
    this.db = Contact;
  }

  async read() {
    await this.db.updateMany({
      isRead: true,
    });
  }

  async addMessage({ name, email, mobileNumber, message }) {
    try {
      const response = await axios.post(
        'https://graph.facebook.com/v21.0/102475412873585/messages',
        JSON.stringify({
          messaging_product: 'whatsapp',
          to: '6282259042427',
          type: 'text',
          text: {
            body: `*AM Web Portofolio* \n\nNama : ${name} \nEmail : ${email} \nNo. Telepon : ${mobileNumber} \nPesan : ${message}`,
          },
        }),
        {
          headers: {
            Authorization: `Bearer ${process.env.API_WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data.messages[0].id;
    } catch (err) {
      throw new InvariantError('Gagal mengirim pesan');
    }

    // const result = await this.db.create({
    //   name,
    //   email,
    //   mobile_number: mobileNumber,
    //   message,
    // });
    // if (!result) {
    //   throw new InvariantError('Gagal mengirim pesan');
    // }
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
