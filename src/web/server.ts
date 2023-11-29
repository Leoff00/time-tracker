import * as moment from "moment";
import * as enums from "../enums";
import express from "express";
import path from "path";
const app = express();

app.set("views", path.resolve(__dirname, "../../web"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.locals = {
    enums,
    moment,
  };
  next();
});
export default app;
