// config methodu bu paketi çağır demek .env(static const şeyler tanımlıyoruz sol tarafta görüceksin <--- ) dosyası için  <--
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();



//db bağlantısı 
require('./src/config/database');



//public klasöründe css kodlar felan oluyor normalde senin işin değilde işlemlere odaklanman için bir el at
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');


app.use(expressLayouts);
app.set('view engine','ejs');
//default engine için bunu yazıyoruz. yazmasakta olurmuş ama <----- 
app.set('views',path.resolve(__dirname,'./src/views'));



app.get('/', (req,res)=>{
    res.send({
        mesaj:'merhaba'
    })
    });


app.listen(process.env.PORT,()=>{
console.log('Server ${process.env.PORT} portundan ayaklandı');
},);