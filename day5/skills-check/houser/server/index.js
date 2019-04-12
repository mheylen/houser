const express = require("express");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();
const app = express();

app.use(express.json());

const { CONNECTION_STRING} = process.env;


massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Successfully Connected to Database");
});

app.get("/api/listings", controller.getListings);
app.get("/api/listings/:id", controller.getOneListing);
app.post("/api/listings",controller.addListings);
app.put("/api/listings", controller.updateListings);
app.put("/api/listings/:id", controller.updateProduct);
app.delete("/api/listings/:id", controller.deleteListing);


const PORT = 4000

app.listen(PORT, () => 
  console.log(`I can eat ${PORT} subway sandwiches`)
  );
