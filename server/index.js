import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import route from "./router/router.js";

const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/par",route);

const Url='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const PORT= process.env.PORT || 8888;

mongoose.connect(Url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running at ${PORT}`) ))
    .catch((error)=>console.log(error))

// mongoose.set('useFindAndModify', false);