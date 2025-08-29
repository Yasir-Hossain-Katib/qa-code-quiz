const http = require('http');
const app = require('./index');

http.createServer(app).listen(9999, () => {
    console.log("Application listening on PORT 9999");
});
