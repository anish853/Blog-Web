import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from "dotenv";
//for images
//components
import Connection from './database/db.js';
import Router from './routes/route.js';
const app = express();
DotEnv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
if(process.env.NODE_ENV == 'production'){app.use(express.static('client/build'));}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
const URL = 'mongodb://user:BlogWeb@blogweb-shard-00-00.qn9hm.mongodb.net:27017,blogweb-shard-00-01.qn9hm.mongodb.net:27017,blogweb-shard-00-02.qn9hm.mongodb.net:27017/BlogWeb?ssl=true&replicaSet=atlas-jy0i23-shard-0&authSource=admin&retryWrites=true&w=majority';
Connection(process.env.MONGODB_URL || URL);