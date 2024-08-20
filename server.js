const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    console.log('Anubhav Pandey'); // Replace 'Your Name' with your actual name
    
    // Respond to the client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello! I am Anubhav Pandey\n');
});

// The server listens on port 4000
server.listen(4000, () => {
    console.log('Server running on port 4000');
});
