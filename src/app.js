import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Creating the app using express 
export const app = express();

// Using the middlewares via app.use
app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}));    // cors setup
app.use(express.json({limit: "20kb"}));     // data coming as json from form
app.use(express.urlencoded({extended: true, limit: "20kb"}));   // data coming from url
app.use(express.static("public"));  // "static" is used to make a folder static & use it as cache memory to store data on our server such as img or icons.
app.use(cookieParser());    // "cookie" is used to store secure cookies in the user browser


// Importing the routes
import userRouter from './routes/users.routes.js';
import postRouter from './routes/posts.routes.js';
import commentRouter from './routes/comments.routes.js';

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/comments', commentRouter);