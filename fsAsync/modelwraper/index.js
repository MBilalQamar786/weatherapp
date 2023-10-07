// model wrapper function
// agar ma koi vhi code likhta hoon to wo actomatically is fuction ka ander waraphota ha
// (Function(modle,require,exports,_filename,_dirname){
//     const fs=require('fs')
// module.exports.a=fs;
// });
console.log(__dirname);
console.log(__filename);
// bonus
// (function(){
//     var a='bilal qamar';
//     console.log(a);
// })();
// in the above example show the scope of the IIFE(immediately involked Function Expression)is private in node every file is covered in IIFE so its scope is private
// (function(){
//     var a='bilal qamar';
    
// })();
// console.log(a);
// now in this code we can not print the result because of its private nature ye apni file ma bhi function ka bahir accessable nahi ha