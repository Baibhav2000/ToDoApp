# Backend Setup

To setup backend, follow these steps

#### Configuring environment variables

To use environment variables, create a `.env` file at the root of `backend` folder

```
touch .env    #For Linux Only
```

Inside `.env` file, paste the following

```
URI=<your-mongodb-uri>
```

This way, both MongoDB Atlas Cloud Database and MongoDB local database can be used

#### Installing Dependencies

To install dependencies for the backend, type

```
npm install
```


All set! The backend is ready for service
