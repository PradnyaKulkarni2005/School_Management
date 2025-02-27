const mysql=require ("mysql");
require("dotenv").config();

const db=mysql.createConnection({
    host:process.env.DB_HOST || "localhost",
    user:process.env.DB_HOST || "root",
    password:process.env.DB_USER || "Pradnya@1245",
    database:process.env.DB_NAME || "SchoolManagement"
});

db.connect((err)=>{
    if(err) throw err;
    console.log("MYSQL Connected...")
})

module.exports=db;