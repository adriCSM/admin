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

[![Instagram Icon](https://img.icons8.com/fluency/30/instagram-new.png)](https://instagram.com/adri_csm) [adri_csm](https://instagram.com/adri_csm)
[![Instagram Icon](https://img.shields.io/badge/Instagram-1DA1F2?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/adri_csm) [adri_csm](https://instagram.com/adri_csm)
