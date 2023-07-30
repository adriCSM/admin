import Product from '../../../../model/store/Products_db.js';
import InvariantError from '../../../Error/InvariantError.js';
import NotFoundError from '../../../Error/NotFoundError.js';

class ProductsService {
  constructor(firebaseService, cacheService) {
    this.db = Product;
    this.firebaseService = firebaseService;
    this.cacheService = cacheService;
  }

  async getMetadata(id) {
    const result = await this.db.findOne({ _id: id }).select('-__v');
    const metadata = await this.firebaseService.metadataWithUrl(result.image);
    return metadata;
  }

  async uploadProductImageInFirebase(payload) {
    const { name } = payload;
    const newName = `${name}_${new Date().getTime()}`;
    const { _data: data } = payload.image;
    const fileBuffer = data;
    const metadata = {
      contentType: payload.image.hapi.headers['content-type'],
    };
    const url = await this.firebaseService.addImage(newName, fileBuffer, metadata);
    return url;
  }

  async checkNameProductExist(productName) {
    const result = await this.db.find({
      name: productName,
    });
    if (result.length) {
      throw new InvariantError('Nama product sudah ada. Gunakan nama lain');
    }
  }

  async addProduct({ name, price, image, quantity, category }) {
    await this.checkNameProductExist(name);
    const url = await this.uploadProductImageInFirebase({ name, image });
    const result = await this.db.create({
      name,
      price,
      image: url,
      quantity,
      category,
    });
    if (!result) {
      throw new InvariantError('Product gagal ditambahkan');
    }
    await this.cacheService.delete('allProduct');

    return result.id;
  }

  async getProducts() {
    try {
      const result = await this.cacheService.get('allProduct');
      return { result: JSON.parse(result), cache: true };
    } catch (error) {
      const result = await this.db.find().select('-__v');
      await this.cacheService.set('allProduct', JSON.stringify(result));
      return { result, cache: false };
    }
  }

  async getProduct(id) {
    const result = await this.db.findOne({ _id: id });
    if (!result) {
      throw new NotFoundError('Product tidak ditemukan');
    }
    return result;
  }

  async putProduct(id, { name, price, quantity, image, category }) {
    const imageName = `${name}_${new Date().getTime()}`;
    const product = await this.getProduct(id);
    const metadata = await this.getMetadata(id);
    if (image.hapi.filename === metadata.name) {
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          price,
          quantity,
          category,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui project');
      }
    } else {
      await this.firebaseService.deleteImageWithURL(product.image);
      const url = await this.uploadProductImageInFirebase({ name: imageName, image });
      const result = await this.db.findOneAndUpdate(
        { _id: id },
        {
          name,
          price,
          quantity,
          image: url,
          category,
        },
      );
      if (!result) {
        throw new InvariantError('Gagal memperbarui CV');
      }
    }
  }

  async deleteProduct(id) {
    const result = await this.db.findOneAndDelete({ _id: id });
    if (!result) {
      throw new InvariantError('Product gagal dihapus');
    }
    const data = await this.db.find().select('-__v');
    await this.cacheService.set('allProduct', JSON.stringify(data));
    await this.firebaseService.deleteImageWithURL(result.image);
  }

  async searchProducts(query) {
    const result = await this.db.find({ name: { $regex: query, $options: 'i' } });
    return result;
  }

  async evaluation(id, rating) {
    const result = await this.db.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { evaluation: 1, rating },
      },
    );
    if (!result) {
      throw new InvariantError('Gagal memperbarui evaluasi dan star');
    }
  }

  async favorite(id) {
    const result = await this.db.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { favorite: 1 },
      },
    );
    if (!result) {
      throw new InvariantError('Gagal memperbarui favorite');
    }
  }

  async soldOut(id) {
    const result = await this.db.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { sold_out: 1, quantity: -1 },
      },
    );
    if (!result) {
      throw new InvariantError('Gagal memperbarui favorite');
    }
  }
}

export default ProductsService;
