const EventEmitter=require('events');
const event=new EventEmitter();
event.on('say my name',()=>{console.log('my name is bilal');});
event.on('say my name',()=>{console.log('how are you bilal');});
event.on('say my name',()=>{console.log('hows your day bilal');});
event.on('say my name',()=>{console.log('what is your hobby bilal');});
event.on('say my name',()=>{console.log('whats the matter bilal');});
event.emit('say my name');
event.on('checkpage',(sc,msg)=>{console.log(`the status code is ${sc}and the page is${msg}`);});
event.emit('checkpage',200,'ok');

event.on('bio',(na,co,age)=>{console.log(`the name is ${na}you can contact me throught${co}and my age is${age}`);});


event.emit('bio','BilalQamar','03423706689',23);