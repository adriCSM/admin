# API AdriCSM

## Project setup

```
npm install
```

## Eslint setup

```
npm init @eslint/config
```

## Clone Repository

```
git init
```

```
git clone https://github.com/adriCSM/admin.git
```

## Using API

### <kbd style="background-color:gray">Register</kbd>

```
POST /users
```

### Payload

```
{
  "username":"adri",
  "phoneNumber": "081234567890",
  "email":"adri@gmail.com",
  "password": "#Adricsm10",
  "confirmPassword":"#Adricsm10"
}
```

### Response

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

```
POST /auth
```

### Payload

```
{
  "email":"adri@gmail.com",
  "password":"#Adricsm10"
}
```

### Response

```
{
  "status": "success",
  "data": {
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgwZGQyMDgyZWY2ZjYxZTg3OTY3NyIsImlhdCI6MTY5MTA3NzIwMH0.hSMil0sWfLbdj6trW8YV6Ldo1otowz4T7zW5vWASD9s",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgwZGQyMDgyZWY2ZjYxZTg3OTY3NyIsImlhdCI6MTY5MTA3NzIwMH0.Usi6KpLe5_HiN-3ztkf-Aoxp7v5PV8fquNyUEqkrxkM"
  }
}
```

### GET users (need access token)

```
GET /users
```

### Response

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

Follow my social media:
[![Instagram Icon](https://img.icons8.com/fluency/30/instagram-new.png)](https://instagram.com/adri_csm) adri_csm
