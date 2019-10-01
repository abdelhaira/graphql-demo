const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

//allow cross-orogin requests
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/graphql")
  .then(() => {
    console.log("connected to db");
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("server up");
});
