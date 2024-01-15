# Welcome to HealthGuide!

### Follow the instructions below to build and run the application:

1. Follow **[these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)** to download and install Node.js and npm on your local machine.
    - To see if you already have Node.js and npm installed  and check the installed version run the following commands:
      - `node -v`
      - `npm -v`
2. In the `backend` directory,  create a `.env` file, and set the environment variables that are present in the `.env.example` file
   1. Environment variables:
      1. `PORT` port number where the backend runs on.
      2. `EMAIL_USER` email account used to send emails
      3. `EMAIL_PASS` password of email account used to send emails.
         1. In the case of gmail accounts, this field should be the APP Password not the actual account password.
      4. `MONGO_USER` username of the MongoDB database used.
      5. `MONGO_PASS` password of MongoDB database used.
      6. `MONGO_URI` connection string for the MongoDB database.
3. From the command line: `cd` into the `backend` directory, then run `npm install` to install the backend dependencies.
   1. Then run `npm start` to run the backend server.
4. From the command line: `cd` into the `frontend` directory, then run `npm install` to install the frontend dependencies.
   1. Then run `npm start` to run the frontend server.