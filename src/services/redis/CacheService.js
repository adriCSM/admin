import { createClient } from '@vercel/kv';

class CacheService {
  constructor() {
    this.client = createClient({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
    // url: process.env.REDIS_URL,
  }

  async set(key, value, expiredIn = 1800) {
    await this.client.set(key, value, {
      EX: expiredIn,
    });
  }

  async get(key) {
    const result = await this.client.get(key);
    if (result === null) throw new Error('Cache tidak ditemukan');
    return result;
  }

  delete(key) {
    this.client.del(key);
  }
}
export default CacheService;
