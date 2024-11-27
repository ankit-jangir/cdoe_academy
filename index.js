const express = require("express");
const app = express();
const port = 7898;
const { mongodb } = require("./Src/confic/confic");
const route  = require("./Src/Routes/myRoutes");
const url = "mongodb://localhost:27017/code_academy_project";

require("./Src/confic/confic");
app.use(express.json());

mongodb(url)
.then(() => {
  console.log("mongodb connected");
  
})
.catch((error) => {
  console.log(error);
  
})
app.use("",route)
app.listen(port, () => {
  console.log(`server is connected ${port}`);
});
