const http = require('http');

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my Node Js projecty\n');
});


server.listen(4000, () => {
    console.log('Server running on port 4000');
});
