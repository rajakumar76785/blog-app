const mongoose =require("mongoose");
require("dotenv").config();
const DBConnection = () => {
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(()=>{
        console.log("Database connection successfull");
    })
    .catch((error)=>{
        console.log("Issue in database connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = DBConnection;