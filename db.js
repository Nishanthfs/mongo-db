const mongodb=require("mongodb")
const MongoCient=mongodb.MongoClient;
const ObjectID=mongodb.ObjectId;
let database;
async function getdatabase(){
    const client= await MongoCient.connect("mongodb://127.0.0.1:27017")
    database=client.db("library");
    if(!database){
        console.log("not connect database")
    }
    return database;

}
module.exports={getdatabase,ObjectID}
