const http = require("http");
const app = require("./App");

const port = process.env.port || 7100;
const server = http.createServer(app);
module.exports = server;
app.listen(port);

