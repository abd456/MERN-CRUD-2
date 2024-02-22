const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors(
  {
    origin:["https://mern-crud-api-fawn.vercel.app/"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  }
));

app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://abd123:abd123@cluster0.v4mbgh9.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(DB_URL,{
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB CONNECTED!');
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT,(req,res)=>{
    console.log(`app is running on port ${PORT}`)
});

