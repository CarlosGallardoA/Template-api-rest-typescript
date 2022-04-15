import express from "express";
const app = express();
//settings
app.set("port", process.env.PORT || 3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

export default app;
