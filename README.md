# express-ts-boilerplate 🔥
NodeJs - Express boilerplate with typescript

### Features
- 💯Express server
- 🚀Logging with [winston](https://www.npmjs.com/package/winston)
- 🌈Console logging with [debug](https://www.npmjs.com/package/debug)
- 🎉Typechecking with [Typescript](https://www.typescriptlang.org/)
- ✏️Linting with [Eslint](https://eslint.org/)
- 💡Absolute imports
- 🛠schema-based solution to model your application data with [Mongoose](https://mongoosejs.com/)

## Getting Started
```
git clone --depth=1 https://github.com/Emehado/express-ts-boilerplate.git your-project-name
cd your-project-name
yarn install
```
Now create a .env file and add the following environment variables
```
NODE_ENV=development
DB_URI=mongodb://localhost:27017/dbname
```
- Setting NODE_ENV to development adds the console transport to winston.
- Be sure to modify DB_URI to meet your needs.

Then, you can run locally in development mode with live reload:
```
yarn dev
```
Open http://localhost:3000 with your favorite browser to see your project.

That's it. You're all set!💯

Happy Coding💻
