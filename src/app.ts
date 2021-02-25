const express=require("express");
import * as homeController from "./home";
import bodyParser from "body-parser";
const app = express();

/**
 * Primary app routes.
 */
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.use(express.json());

// routing set up
app.post("/api/v1/parse", homeController.indexV1);
app.post("/api/v2/parse", homeController.indexV2);

const server = app.listen(app.get("port"), () => {
    
});
module.exports = server;