const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('returnOriginal', false);

let dbURL = "mongodb://localhost:27017/internAssignment"; 

mongoose.connect(dbURL,
     {
         useNewUrlParser: true,
          useUnifiedTopology:true
        
        }).then(()=>{
console.log("Database connected successfully");

}).catch(err => {
console.error("***** Error while connecting database: "+err.message+"*****");
});
