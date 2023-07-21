import authHeader from '@/services/auth-header';
import axios from 'axios';

export default {
  async getMessages() {
    const response = await axios.get('/portofolio/messages', {
      headers: await authHeader(),
    });
    return response.data.data.messages;
  },
  async addMessage(message) {
    const response = await axios.post(
      '/portofolio/messages',
      { ...message },
      {
        headers: await authHeader(),
      },
    );
    return response.data.data.messages;
  },
  async deleteMessage(id) {
    const response = await axios.delete('/portofolio/messages/' + id, {
      headers: await authHeader(),
    });
    return response.data.message;
  },
};
