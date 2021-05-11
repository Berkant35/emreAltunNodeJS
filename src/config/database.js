const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{


    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex:true,

    useFindAndModify:false

})

    .then(() => {

            console.log('Veri tabanına bağlanıldı.. <--- ');
    })
    .catch((err) =>{

            console.log('Veri tabanına bağlanırken hata.. === '+err.toString());

    })