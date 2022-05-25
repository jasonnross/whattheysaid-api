import express from "express";
import cors from 'cors';
import articlesRouter from "./routes/articlesRouter.js";
import personsRouter from "./routes/personsRouter.js";
import config from './config.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/articles", articlesRouter);
app.use("/persons", personsRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(config.details.port, () => {
  console.log(`${ config.details.application_name } started on port ${ config.details.port }`);
});