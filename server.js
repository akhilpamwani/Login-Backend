
//  Imported 

const express =require('express');
const app=express();
const Port=8000;
const router=require('./routes/routes')
const mongoose=require('mongoose')
const cors= require('cors')
const bodyParser = require('body-parser')
const dotenv=require('dotenv')

// Initialising  Imports

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',router)
app.use(express.json())
dotenv.config()
// Mongodb Connection

mongoose.connect(process.env.Mongo_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(()=>{
    console.log("Mongodb Connected Sucessfully")
})
.catch(()=>{
    console.log('Mongodb Not Connected')
})



// Lisenting the Port
app.listen(Port,()=>{
    console.log(`Server Running on ${Port}`)
})

