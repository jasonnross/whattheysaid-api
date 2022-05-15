const express = require("express");
const cors = require('cors')
const app = express();
const port = 8081;
const articlesRouter = require("./routes/articlesRouter");
const personsRouter = require("./routes/personsRouter");

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
app.listen(port, () => {
  console.log(`WTS API listening at http://localhost:${port}`);
});