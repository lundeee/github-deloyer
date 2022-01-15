const {
  GetLogs,
  Deploy
} = require("./services/deploy");

function routes(app) {
  app.get("/", (req, res) => {
    GetLogs().then (() => {
      res.status(200).send(req.body);
    }).catch((err) => {
      console.log(err)
      res.status(400).send(err.toString());
    })
  });

  app.post("/", (req, res) => {
    Deploy(req.body).then (() => {
      res.status(200).send(req.body);
    }).catch((err) => {
      console.log(err)
      res.status(400).send(err.toString());
    })
  });
}

module.exports.routes = routes;
