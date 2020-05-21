// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");

// //console.log(md5('message'));
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json({ limit: '10000MB' }));

// //app.use("/package", packageRoutes);
// //Routes
// app.use(require('./routes/user'));

// app.listen(PORT, function () {
//   console.log("Server is runing on Port" + PORT);
// });


const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user"); //new addition
const userType = require("./routes/user-type"); //new addition
const banklist = require("./routes/banklist"); //new addition
const userwork = require("./routes/user_works"); //new addition
const materiales = require("./routes/materiales"); //new addition
const categories = require("./routes/categories"); //new addition
const event = require("./routes/event"); 
const dashboard = require("./routes/dashboard"); 
const product = require("./routes/product"); 
const franchise = require("./routes/franchise"); //new addition
const cost_category = require("./routes/cost_category"); //new addition
const sub_category = require("./routes/sub_category"); //new addition
const orders = require("./routes/orders"); //new addition
const order_detail = require("./routes/orders_detail"); //new addition
//const categories = require("./routes/categories"); //new addition

const user_works = require("./routes/user_works"); //new addition
const line_api = require("./routes/linelogin"); //new addition
const weges = require("./routes/wages"); //new addition

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()
})

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/user-type", userType);
app.use("/banklist", banklist);
app.use("/userwork", userwork);
app.use("/materiales", materiales);
app.use("/categories", categories);


app.use("/product", product);

app.use("/dashboard", dashboard);
app.use("/event", event);
app.use("/franchise", franchise);
app.use("/cost_category", cost_category);
app.use("/sub_category", sub_category);
app.use("/orders", orders);
app.use("/orders_detail", order_detail);

app.use("/user_works", user_works);
app.use("/lineapi", line_api);
app.use("/wages", weges);
//app.use("/categories", categories);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});


