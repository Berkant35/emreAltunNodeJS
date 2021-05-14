// config methodu bu paketi çağır demek .env(static const şeyler tanımlıyoruz sol tarafta görüceksin <--- ) dosyası için  <--
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();



//db bağlantısı 
require('./src/config/database');

//routerlar include edilir....  <---
const authRouter = require('./src/routers/auth_router.js');


//Formdan gelen değerleri okuyabilmemiz için middlewarelar kullanmalıyız..

app.use(express.urlencoded({
    extended: true,
}));



//public klasöründe css kodlar felan oluyor normalde senin işin değilde işlemlere odaklanman için bir el at
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');


app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', authRouter);


app.set('view engine', 'ejs');
//default engine için bunu yazıyoruz. yazmasakta olurmuş ama <----- 
app.set('views', path.resolve(__dirname, './src/views'));



app.get('/', (req, res) => {
    res.send({
        mesaj: 'merhaba'
    })
});


app.listen(process.env.PORT, () => {
    console.log('Server ${process.env.PORT} portundan ayaklandı');
});