import express from "express";
import cors from "cors";
import { FRONTEND_URL, PORT } from "./config.js";

const app = express();


app.use(
  cors({
    origin: FRONTEND_URL, 
  })
);

app.get('/f', (req, res) => {
  console.log('seguido');
  res.send('solicitud recibida');
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});