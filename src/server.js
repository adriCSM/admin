import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';

import Jwt from '@hapi/jwt';
import Inert from '@hapi/inert';
import mongoose from 'mongoose';

// USER
import users from './api/User/index.js';
import UsersService from './services/mongodb/UsersService.js';
import UserValidator from './validators/User/index.js';

// AUTHENTICATION
import authentication from './api/Authentication/index.js';
import AuthenticationService from './services/mongodb/AuthenticationsService.js';
import AuthenticationValidator from './validators/Authentication/index.js';
import TokenManager from './token/TokenManager.js';

// PAYMENT

import payment from './api/payment/index.js';
import MidtransService from './services/midtrans/Midtrans.Service.js';

// PORTOFOLIO PROJECTS
import projects from './api/portofolio/Projects/index.js';
import ProjectsService from './services/mongodb/portofolio/ProjectsService.js';
import ProjectValidator from './validators/Portofolio/Projects/index.js';

// PORTOFOLIO CERTIFICATE
import certificates from './api/portofolio/Certificates/index.js';
import CertificatesService from './services/mongodb/portofolio/CertificatesService.js';
import CertificateValidator from './validators/Portofolio/Certificates/index.js';

// PORTOFOLIO CV
import cv from './api/portofolio/cv/index.js';
import CvService from './services/mongodb/portofolio/Cv.service.js';
import CvValidator from './validators/Portofolio/Cv/index.js';

// PORTOFOLIO CV
import contact from './api/portofolio/Contact/index.js';
import ContactService from './services/mongodb/portofolio/Contact.service.js';
import ContactValidator from './validators/Portofolio/Contact/index.js';

// STORE PRODUCT
import products from './api/store/Product/index.js';
import ProductsService from './services/mongodb/store/ProductsService.js';
import FirebaseService from './services/firebase/FirebaseService.js';
import ProductValidator from './validators/store/Product/index.js';

// STORE CART
import carts from './api/store/Cart/index.js';
import CartsService from './services/mongodb/store/CartsService.js';
import CartValidator from './validators/store/Cart/index.js';

// CACHE SERVER-SIDE (REDIS)
import CacheService from './services/redis/CacheService.js';

// IMAGE VALIDATOR
import ImageValidator from './validators/Image/index.js';

// ERROR HANDLING
import errorHandling from './Error/errorHandling.js';

const init = async () => {
  dotenv.config();
  const firebaseService = new FirebaseService();
  const cacheService = new CacheService();
  const usersService = new UsersService(firebaseService);
  const authenticationsService = new AuthenticationService();

  const midtransService = new MidtransService();

  const projectsService = new ProjectsService(firebaseService);
  const certificatesService = new CertificatesService(firebaseService);
  const cvService = new CvService(firebaseService);
  const contactService = new ContactService();

  const productsService = new ProductsService(firebaseService, cacheService);
  const cartsService = new CartsService();

  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: [
          'http://localhost:8080',
          'https://adri-csm.my.id',
          'https://am-admin.netlify.app',
          'https://adricsm.github.io',
          'https://am-store.netlify.app',
          'https://admin.adri-csm.my.id',
        ],
        additionalHeaders: ['X-Requested-With', 'X-Data-Source'],
        credentials: true,
      },
    },
  });

  await server.register([
    {
      plugin: Jwt,
    },
    {
      plugin: Inert,
    },
  ]);

  server.auth.strategy('allproject_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  });

  await server.register([
    {
      plugin: users,
      options: {
        usersService,
        validator: UserValidator,
        imageValidator: ImageValidator,
      },
    },
    {
      plugin: authentication,
      options: {
        authenticationsService,
        usersService,
        TokenManager,
        validator: AuthenticationValidator,
      },
    },
    {
      plugin: products,
      options: {
        productsService,
        usersService,
        validator: ProductValidator,
        imageValidator: ImageValidator,
      },
    },
    {
      plugin: carts,
      options: {
        cartsService,
        validator: CartValidator,
      },
    },
    {
      plugin: projects,
      options: {
        projectsService,
        usersService,
        validator: ProjectValidator,
        imageValidator: ImageValidator,
      },
    },
    {
      plugin: certificates,
      options: {
        certificatesService,
        usersService,
        validator: CertificateValidator,
        imageValidator: ImageValidator,
      },
    },
    {
      plugin: cv,
      options: {
        usersService,
        cvService,
        validator: CvValidator,
        imageValidator: ImageValidator,
      },
    },
    {
      plugin: contact,
      options: {
        contactService,
        usersService,
        validator: ContactValidator,
      },
    },
    {
      plugin: payment,
      options: {
        midtransService,
        validator: ContactValidator,
      },
    },
  ]);

  server.ext('onPreResponse', errorHandling);

  await mongoose.connect(process.env.MONGODB_URI).catch((err) => {
    console.log('Error: ', err.message);
  });
  await server.start().then(() => {
    console.log(`server running at ${server.info.uri}`);
  });
};
init();
