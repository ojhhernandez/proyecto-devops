import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { dividir, multiplicar, restar, sumar } from "./calcular.js";



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});


app.get("/info", (req, res) => {
  
  const env=process.env.ENVIRONMENT;
  console.log(env);
  res.send({
    "entorno":env
  });
});

app.get("/api", (req, res) => {
  
  const apikey=process.env.API_KEY;
  console.log(apikey);
  res.send({
    "apikey":apikey
  });
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: sumar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: restar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: dividir(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: multiplicar(operacion.num1, operacion.num2) });
  }
  return res.send({ resultado: "hola mundo" });
});



export default app;