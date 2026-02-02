const http=require("http");
const fs= require("fs");
const path=require("path");

const PORT = 3000;
const server =http.createServer((req,res)=> {
    if (req.url ==="/" || req.url ==="/index.html"){
        const filePath = path.join(__dirname, "index.html");
        fs.readFile(filePath, "utf-8", (err,data) =>{
            if(err){
                res.writeHead(500, {"content-Type":"text/plain"});
                res.end("server error");
            } else{
                res.writeHead(200, {"Content-Type":"text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {"content-Type": "text/html"});
        res.end("<h1>404 Not Found<h1><p> The page you requested does not exist.</p>");
    }
});
server.listen(PORT, () =>{
    console.log(`server running at http: //localhost:${PORT}`);
});