const express = require("express");
const Router = require("./Src/Routes/myRoutes");
const app = express();
const port = 7898;
require("./Src/confic/confic");
app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log(`server is connected ${port}`);
});
