const mongoose = require ('mongoose')
const url = "mongodb://localhost/NewSign"

mongoose.connect(url).then(()=>{
    console.log('connection successful')
}).catch((error)=>{
    console.log(error.message)
});

module.exports = mongoose;