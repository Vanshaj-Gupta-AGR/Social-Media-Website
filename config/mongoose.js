const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/first_project');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('sucessfully connected to database');
})

module.exports=db;