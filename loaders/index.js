const expresLoader = require("./expressLoader");
const mongooseLoader = require("./mongooseLoader");

module.exports = async app => {
    await mongooseLoader()
    await expresLoader(app)
}