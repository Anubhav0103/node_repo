const http = require('http');
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'messages.txt');


const saveMessage = (message) => {
    fs.appendFileSync(filePath, message + '\n');
};


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {

        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.method === 'POST' && req.url === '/send') {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { message } = JSON.parse(body);
            saveMessage(message);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
