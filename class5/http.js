const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Data fetched")
})

server.listen(8000,()=>{
    console.log("Your server running on port 8000")
})