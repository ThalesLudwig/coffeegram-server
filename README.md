# Coffeegram Server

The serverside app for Coffeegram, a simple portfolio project to show the use of NodeJs and its libraries.

Tools used:
- Express
- Multer
- Sharp
- Mongoose
- Socket.io

## Database setup

The app is ready to accept a MongoDB connection string on the env.js file.<br>
Just login with your [Mongo Atlas](https://www.mongodb.com/cloud/atlas) account and create a `posts` Collection.

## Project setup
```
$ yarn install
```
Downloads dependencies.

```
$ yarn dev
```
Runs the app in the development mode on port `3333`.<br>
You will also see any lint errors in the console.