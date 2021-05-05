
const http = require('http');
const port = 4000;
const app = require('./src/app');
const server = http.createServer(app);





server.listen(port,  () => console.log(`Server started at port ${port}`));
