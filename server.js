const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const routesIndex = require("./routes");
const loaderIndex = require('./loaders');
const cors = require("cors")
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials:true, origin: "http://localhost:3000" }))

const startServer = async () => {
    app.listen(port, ()=> console.log(`server running in port ${port}`))
    await routesIndex(app)
    await loaderIndex(app)
}

if (process.env.NODE_ENV = 'production') {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

startServer();