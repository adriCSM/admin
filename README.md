# API AdriCSM

## Project setup

#### Clone Repository

```
git clone https://github.com/adriCSM/admin.git
```

```
npm install
```

#### Eslint

```
npm init @eslint/config
```

## Technology

`Node JS`, `Hapi` Framework, `redis`, `mongoDB`, `Firebase`

## Using API

### URL : `https://admin-am.vercel.app`

### Register

`Endpoint`

```
POST /users
```

`Payload`

```
{
  "username":"adri",
  "phoneNumber": "081234567890",
  "email":"adri@gmail.com",
  "password": "#Adricsm10",
  "confirmPassword":"#Adricsm10"
}
```

`Response`

```
{
  "status": "success",
  "message": "Akun berhasil dibuat",
  "data": {
    "userId": "64cbce0c7a4d8fc56d322b80"
  }
}
```

### Login

`Endpoint`

```
POST /auth
```

`Payload`

```
{
  "email":"adri@gmail.com",
  "password":"#Adricsm10"
}
```

`Response`

```
{
  "status": "success",
  "data": {
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgwZGQyMDgyZWY2ZjYxZTg3OTY3NyIsImlhdCI6MTY5MTA3NzIwMH0.hSMil0sWfLbdj6trW8YV6Ldo1otowz4T7zW5vWASD9s",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgwZGQyMDgyZWY2ZjYxZTg3OTY3NyIsImlhdCI6MTY5MTA3NzIwMH0.Usi6KpLe5_HiN-3ztkf-Aoxp7v5PV8fquNyUEqkrxkM"
  }
}
```

### GET Users

`Endpoint`

```
GET /users
```

`Headers`

```
{
  Headers:{
    Authorization: Bearer <accessToken>
  }
}
```

`Response`

```
{
  "status":"success",
  "data": [
    {
      "_id": "64a80dd2082ef6f61e879677",
      "username": "adri",
      "phone_number": "081234567890",
      "email": "adri@gmail.com",
      "role": "adri",
      "pic": "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
      "createdAt": "2023-07-07T13:06:26.860Z",
      "updatedAt": "2023-08-03T15:40:00.052Z",
      "__v": 0,
      "isOnline": true
    },
    ...
}
```

### GET Products

`Endpoint`

```
GET /store/products
```

`Response`

```
{
  "status": "success",
  "data": {
    "products": [
      {
        "evaluation": 0,
        "rating": 0,
        "sold_out": 0,
        "favorite": 0,
        "_id": "64ba3a3cc6b1dd4191763b45",
        "name": "ale-ale",
        "price": 2000,
        "image": "https://firebasestorage.googleapis.com/v0/b/product-37d5c.appspot.com/o/image%2Fteh%20gelas%20bapak%20budi_1689926339425_1689926340571?alt=media&token=5cb1c194-c888-4991-8c81-42256598bcdf",
        "category": "Makanan",
        "quantity": "49"
      },
    ...
    ]
  }
}
```

#### Follow my social media:

[![Instagram Icon](https://img.shields.io/badge/instagram-E1306C?style=plastic&logo=instagram&logoColor=white&logoSvg=
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>)](https://instagram.com/adri_csm)
