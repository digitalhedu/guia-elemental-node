const http = require("http");

const urlParam = require('url');

const server = http.createServer()

server.on('request', (request, response) => {

    const {headers, method, url } = request;

    let body = [];

    request.on('error', (err) =>  console.error(err) );

    request.on('data', chunk =>  body.push(chunk) );

    request.on('end', () => {

        body = Buffer.concat(body).toString(); 

        response.writeHead(200, {'Content-Type': 'application/json; charset= utf-8'})

        const query = urlParam.parse(url,true).query;

        const responseBody = {headers,method, url, body, query };
        
        response.write(JSON.stringify(responseBody));
        
        response.end();
    })
});

server.listen(3000,"localhost",() => console.log("Start Server"))