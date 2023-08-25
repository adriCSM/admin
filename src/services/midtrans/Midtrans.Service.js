import midtransClient from 'midtrans-client';
import Donation from '../../../model/Donation_db.js';
import InvariantError from '../../Error/InvariantError.js';

class MidtransService {
  constructor() {
    this.db = Donation;
    this.snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_client_KEY,
    });
  }

  async sendDonation({ firstName, lastName, email, grossAmount }) {
    const checkEmail = await this.db.find({ email });
    try {
      if (!checkEmail.length) {
        await this.db.create({
          firstName,
          lastName,
          email,
          grossAmount,
        });
      } else {
        await this.db.updateOne(
          { email },
          {
            $inc: { grossAmount },
          },
        );
      }

      const parameter = {
        transaction_details: {
          order_id: `donation-${new Date().getTime()}`,
          gross_amount: grossAmount,
        },
        customer_details: {
          first_name: firstName,
          last_name: lastName,
          email,
        },
        credit_card: {
          secure: true,
        },
      };

      const transaction = await this.snap.createTransaction(parameter);
      return transaction;
    } catch (error) {
      throw new InvariantError(error.message);
    }
  }
}

export default MidtransService;
