const fs=require('fs');
const http=require('http');
const server=http.createServer();
// not straming method
// server.on('request', (req,res)=>{
//     fs.readFile('input.txt','utf-8',(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data);
//     })
// })
// streaming method
server.on('request', (req,res)=>{
const rstream=fs.createReadStream('input.txt');
// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);
// })
// rstream.on('end',()=>{
//     res.end();

// })
// rstream.on('error',(err)=>{
//     console.log(err);
//     res.end('file not found');
// })


// third way of doing read and write
rstream.pipe(res);
})


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening the port number 8000');
})