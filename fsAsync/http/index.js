const http=require('http');
const fs=require('fs');
const data=fs.readFileSync('D:/bilal oct3/fsAsync/json/userapi/userapi.json','utf-8');
// the request(req) object is used to get information about the current HTTP request.
// the responce(res) object is used to send the responce about the current HTTP request.
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
         res.end('hello from the other side Bilal Qamar');
    }else if(req.url=='/userapi'){
        // res.end(data)
        res.writeHead(200,{'content-type':'application/json'});
        const a=JSON.parse(data);
        res.end(a[2].name);
    
        // res.end('hello from the userapi side Bilal Qamar');
    
    }else if(req.url=='/contact'){
        res.end('hello from the contactus side Bilal Qamar');
    
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>404 page not found error</h1>');
    
    }

});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to the port number 8000');
})