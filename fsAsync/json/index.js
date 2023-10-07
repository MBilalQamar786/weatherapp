const bio={
    fname:'bilal',
    lname:'qamar',
    contact:'03423706689',
    age:23
}
// if we wanted to convert our object to json formet we only need to kow two method 
// const jsondata=JSON.stringify(bio);
// console.log(jsondata);
// // now if you wanted to convert json to object used parse
// const objdata=JSON.parse(jsondata);
// console.log(objdata)
// 1
const a=JSON.stringify(bio);
// 2
const fs=require('fs');
fs.writeFile('one.json',a,()=>{console.log('file created successful');});
// 3
fs.readFile('one.json','utf-8',(ab,b)=>{console.log(b);});
// 4
const ordata=JSON.parse(a);
console.log(ordata);
