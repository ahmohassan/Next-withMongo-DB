import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;


let conn;
async function db(){
    
        conn = await mongoose.connect(MONGO_URI);
    

    return conn

}

export default db