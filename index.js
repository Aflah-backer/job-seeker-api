require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to job seeking api!");
});

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
  })
);
app.use(
  bodyParser.json({
    limit: "500mb",
  })
);

const PORT = process.env.PORT;
const httpServer = http.createServer(app);
httpServer.listen(PORT, async () => {
  console.log(`HTTP server listening on port ${PORT}`);
});
httpServer.timeout = 0;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(`MongoDB connected ${process.env.DB_URI}`);
  })
  .catch((err) => console.log(err));

//  app.use(function (req, res, next)  {
//     next(createError(400))
//  })

app.use("/", require("./routes/auth"));
