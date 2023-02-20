import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:LW93zvHjoB4GRwGt@cluster0.mdmwoar.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.get('/',(req, res) => {
    res.send('SUCCES');
})
app.use('/posts', posts);

mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connect to db");
        app.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`);
         }); 
    })
    .catch((err)=> {
        console.log("err", err);
    });