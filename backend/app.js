const express = require("express");
const cors = require("cors");
const router = express.Router();
const methods = require("./methods/methods-model");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/books", function (req, res) {
  return res.send(methods.findAll()).status(200).end();
});

router.post("/books", function (req, res) {
  const response = methods.add(req.body);
  switch (response.status) {
    case 200:
      return res.send(response.value).status(response.status).end();
    case 403:
      return res.send(response.value).status(response.status).end();
  }
});

router.put("/books/:id", function (req, res) {
  const response = methods.edit(req);
  switch (response.status) {
    case 200:
      return res.send(response.value).status(response.status).end();
    case 400:
      return res.send(response.value).status(response.status).end();
    case 404:
      return res.send(response.value).status(response.status).end();
  }
});

router.delete("/books/:id", function (req, res) {
  const response = methods.remove(req);
  switch (response.status) {
    case 200:
      return res.send(response.value).status(response.status).end();
  }
});

app.use("/", router);

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
