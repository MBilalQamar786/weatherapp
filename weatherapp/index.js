const http=require('http');
const requests = require('requests');
const fs=require('fs');
const replaceval=(tempval,orgval)=>{
    let temperature=tempval.replace('{%temp%}',orgval.main.temp);
    temperature=temperature.replace('{%tempmin%}',orgval.main. temp_min)
    temperature=temperature.replace('{%tempmax%}',orgval.main.temp_max)
    temperature=temperature.replace('{%location%}',orgval.name)
    temperature=temperature.replace('{%country%}',orgval.sys.country)
    return temperature;
}
const homefile=fs.readFileSync('home.html','utf-8');
const server =http.createServer((req,res)=>{
    requests('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=93258f273388f826e0f302b9b5b2a620')
    .on('data',  (chunk)=> {
        const objdata=JSON.parse(chunk)
        const arrydata=[objdata];
        // console.log(arrydata[0].main.temp);
        const realtimedata=arrydata.map((val)=>replaceval(homefile,val)).join("");
         res.write(realtimedata);
        // console.log(realtimedata);
    })
    .on('end', (err)=> {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        //  console.log('end');
});

})
server.listen(8000,'127.0.0.1')