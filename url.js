const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/home') {
        res.statusCode = 200;
        res.end('Welcome home');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('Welcome to About Us page');
    } else if (req.url === '/node') {
        res.statusCode = 200;
        res.end('Welcome to my Node Js project');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(4000, () => {
    console.log('Server running on port 4000');
});
