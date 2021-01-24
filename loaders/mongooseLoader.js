const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

module.exports = () => mongoose.connect(process.env.DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> console.log("db connected"))
.catch(()=> console.log("error connecting to the db"))