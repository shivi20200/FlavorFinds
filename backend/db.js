const mongoose = require('mongoose');
const mongoURI = 'mongodb://Shivangi_2020:Shivangi123@ac-7cahpyw-shard-00-00.xzmab3q.mongodb.net:27017,ac-7cahpyw-shard-00-01.xzmab3q.mongodb.net:27017,ac-7cahpyw-shard-00-02.xzmab3q.mongodb.net:27017/FoodKort?ssl=true&replicaSet=atlas-t22r5e-shard-0&authSource=admin&retryWrites=true&w=majority';

 
// const mongoDB =async()=>{
//   await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//     if(err)console.log("---",err)
//     else{
//   console.log("connected");
// const fetched_data =await mongoose.connection.db.collection("mernsample");
// fetched_data.find({}).toArray(async function(err,data){
// const foodcategory=await mongoose.connection.db.collection("foodcategory");
// foodcategory.find({}).toArray(funtion(err,catData){
//   if(err)console.log(err);
//   else{
//     global.mernsample=data;
//     global.foodcategory=catData;
//   }
// })


// //})
//     }
//   })
// }
// mongoDB();
// module.exports=mongoDB;



//const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("mernsample").find({}).toArray();
    global.mernsample = fetchedData;

    const catData = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
    global.foodcategory = catData;

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

mongoDB(); // Call the function to initiate the MongoDB connection

module.exports = mongoDB;
