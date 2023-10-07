const fs=require('fs');
// fs.writeFile('one.txt','this is Async file',(a)=>{
//     console.log('the file is created')
// })
// fs.appendFile('one.txt','whixh is also awsome',(a)=>{
//     console.log('the text is append successful',a)
// });
// fs.readFile('one.txt','utf-8',(a,b)=>{
//     console.log(b);
// });
// fs.mkdir('bilalAsync',(a)=>{
//     console.log("folder is created")
// });
// fs.writeFile('./bilalAsync/1.txt','my name is bilal',(a)=>{
//     console.log('file is created')
// })
// fs.appendFile('./bilalAsync/1.txt','And my hobby is codding',(a)=>{
//     console.log('file is appned');
// })
// fs.readFile('./bilalAsync/1.txt','utf-8',(a,b)=>{
//     console.log(b);
// });
// fs.unlink('./bilalAsync/1.txt',(a)=>{
//     console.log('file is deleted')
// });
// fs.rmdir('bilalAsync',(a)=>{
//     console.log("folder is deleted");
// });
fs.rename('index.js','index1.js',(a)=>{
    console.log('rename successful');
});