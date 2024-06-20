import { createServer } from 'node:http';
import {unlink} from 'node:fs';


// Define request handler


// Create HTTP Server
const server = createServer(function (req, res) {
    console.log(req,url);
    if (req.url.includes('create')) {
        // create file
        // return response
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>We hav</h1>');
} else {
    // delete file
    unlink('./hello.html', () => {
        console.log('File deleted');
    });
});

// Listen for incoming request
server.listen(3000, '127.0.0.1', function () {
    console.log('Server is running');
});

// Normal funcvtion vrs arrow function
function handleRequest() {}
const handleRequest = () => {}