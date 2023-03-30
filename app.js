const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

const port = 3001;

const leaderboard = [
  {
    name: "Filipa",
    score: 500,
  },
  {
    name: "Rudolf",
    score: 200,
  },
  {
    name: "Arnold",
    score: 100,
  },
  {
    name: "Steven",
    score: 150,
  },
  {
    name: "Angela",
    score: 200,
  },
  {
    name: "Michelle",
    score: 300,
  },
];

app.get("/leaderboard", (req, res) => {
  res.send(leaderboard);
});

app.post("/player", (req, res) => {
  console.log("req.body: ", req.body);
  const newPlayer = req.body;
  leaderboard.push(newPlayer);
  res.send("Player added");
});

app.listen(port, () => {
  console.log(`Leaderboard running at port ${port}`);
});
