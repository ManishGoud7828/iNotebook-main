const mongoose =require('mongoose');
const url="mongodb+srv://manishgaur7828:SL4tlpYBtYONMDEH@cluster0.rtskmu9.mongodb.net/text"

 const connectToMongo=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>console.log(err));
}
module.exports=connectToMongo;

