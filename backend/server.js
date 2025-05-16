import router from './routes.js'
import { connectDB } from "./config/db.js";
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT

const __dirname = path.resolve()

app.use(express.json()) 
app.use("/api/products", router)

if(process.env.NODE_ENV === 'production') {
  app.use.apply(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});
