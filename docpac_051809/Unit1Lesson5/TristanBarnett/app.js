const http = require('http');
require('dotenv').config()
const fs = require('fs');
const PORT = Number(process.env.PORT);
let url = require('url');
const { basename } = require('path');
baseUrl = "http://localhost:5000";
query = "/query";

const server = http.createServer((req,res) => {
    let qrl = new URL (req.url, baseUrl)
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("hello world!\n");
        
    }
    if (qrl.pathname == '/form') {
            if (req.method === "POST") {
                let body = ''
            }
            else if (req.method === "GET") {
                fs.readFile('pages/form.html', 'utf8', (err, data) => {
                    if (err) {
                        console.error("error reading file",err);
                        return;
                    }
                    res.write(data);
                })
            }
            else {
                res.writeHead(404, {  'Content-Type': 'text/plain'});
                res.end("Page not found\n");
            }
        
    }
    if (qrl.pathname == '/query') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Arson\n");
        if  (req.method === 'GET') {
            searchParams = qrl.searchParams.get('message')
            console.log(searchParams);
        }  
    }
});

server.listen(PORT, 'localhost', () => {
    console.log(`server running at http://localhost:${PORT}/`);
})