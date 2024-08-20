const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'messages.txt');

function saveMessage(message) {
    fs.appendFileSync(filePath, message + '\n');
}

module.exports = { saveMessage };
