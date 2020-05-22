const http = require("http");

let routes = require("./router/index");

let server = http.createServer(
    (req,res) => { 
        let action = routes.get(req.url,req.method);
        if(action != null) {
            return action(req,res)
        }
        
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        return res.end("404 Not Found");
    }
);

server.listen(3000,"localhost",null,() => console.log("Start Server"))