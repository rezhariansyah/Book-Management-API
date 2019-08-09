require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const xssFilter = require("x-xss-protection");
const logger = require("morgan");
const app = express();
const port = process.env.SERVER_PORT || 3333;

const bookRoute = require("./src/routes/book");
const borrowRoute = require("./src/routes/borrow");
const userRoute = require("./src/routes/user");

const whiteList = process.env.WHITELIST;

// const corsOptions = (req, callback) => {
//   if (whiteList.split(",").indexOf(req.header("Origin")) !== -1) {
//     console.log("Success");
//     return callback(null, {
//       origin: true
//     });
//   } else {
//     console.log("Failed");
//     return callback(null, {
//       origin: false
//     });
//   }
// };


app.use(express.static(__dirname + '/src/uploads/images/'))
app.use(cors());
// app.options('*', cors(corsOptions))
app.use(xssFilter())
app.use(logger('dev'))

app.listen(port, () => {
  console.log(`\n Server is running on port : ${port} \n `);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // body type

app.use("/book", bookRoute);
app.use("/borrow", borrowRoute);
app.use('/user', userRoute);
