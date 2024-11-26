const express = require("express");
const app = express();
const port = 7898;
const route = require("./Src/Routes/myRoutes");
require("./Src/confic/confic");
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`server is connected ${port}`);
});
