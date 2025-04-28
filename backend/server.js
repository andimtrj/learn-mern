import router from './routes.js'
import { connectDB } from "./config/db.js";
import express from 'express';

const app = express();

app.use(express.json()) 
app.use("/api/products", router)


app.listen(process.env.PORT, () => {
  connectDB();
  console.log("server started at http://localhost:4000/");
});
