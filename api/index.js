import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"


dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log(`Mongodb is connected `);
}).catch((err)=>{
    console.log(err);
})
const app = express();
app.listen(process.env.PORT,()=>{
    console.log(`server is started on port ${process.env.PORT}`);
});

app.use('/api/user',userRoutes);