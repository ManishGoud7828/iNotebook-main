const mongoose =require('mongoose');
const url="your database"

 const connectToMongo=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>console.log(err));
}
module.exports=connectToMongo;

