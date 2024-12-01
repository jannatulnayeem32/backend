const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
    try {
        if(process.env.mode === 'dev'){
            
            await mongoose.connect(process.env.db_url_local, { useNewURLParser: true })
            console.log("local database connect....")
        }else{
            await mongoose.connect(process.env.db_url_pro, { useNewURLParser: true })
            console.log("production database connect....")
        }
       
    } catch (error) {
        console.log(error.message)
    }
}