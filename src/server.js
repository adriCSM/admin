const Hapi = require('@hapi/hapi');
require('dotenv').config();
const Jwt = require('@hapi/jwt');
const Inert = require('@hapi/inert');
const mongoose = require('mongoose');

// USER
const users = require('./api/User');
const UsersService = require('./services/mongodb/UsersService');
const UserValidator = require('./validators/User');

// AUTHENTICATION
const authentication = require('./api/Authentication');
const AuthenticationService = require('./services/mongodb/AuthenticationsService');
const AuthenticationValidator = require('./validators/Authentication');
const TokenManager = require('./token/TokenManager');

// PORTOFOLIO PROJECTS
const projects = require('./api/portofolio/Projects');
const ProjectsService = require('./services/mongodb/portofolio/ProjectsService');
const ProjectValidator = require('./validators/Portofolio/Projects');

// PORTOFOLIO CERTIFICATE
const certificates = require('./api/portofolio/Certificates');
const CertificatesService = require('./services/mongodb/portofolio/CertificatesService');
const CertificateValidator = require('./validators/Portofolio/Certificates');

// STORE PRODUCT
const products = require('./api/store/Product');
const ProductsService = require('./services/mongodb/store/ProductsService');
const ProductValidator = require('./validators/Store/Product');
const FirebaseService = require('./services/firebase/FirebaseService');

// STORE CART
const carts = require('./api/store/Cart');
const CartsService = require('./services/mongodb/store/CartsService');
const CartValidator = require('./validators/Store/Cart');

// CACHE SERVER-SIDE (REDIS)
const CacheService = require('./services/redis/CacheService');

// ERROR HANDLING
const errorHandling = require('./Error/errorHandling');

const init = async () => {
  const firebaseService = new FirebaseService();
  const cacheService = new CacheService();
  const usersService = new UsersService(firebaseService);
  const authenticationsService = new AuthenticationService();

  const projectsService = new ProjectsService(firebaseService);
  const certificatesService = new CertificatesService(firebaseService);

  const productsService = new ProductsService(firebaseService, cacheService);
  const cartsService = new CartsService();

  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['http://localhost:8080', 'http://localhost:8081', 'https://adricsm.github.io'],
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
      },
    },
    {
      plugin: certificates,
      options: {
        certificatesService,
        usersService,
        validator: CertificateValidator,
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
