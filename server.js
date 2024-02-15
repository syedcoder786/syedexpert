const express = require('express');
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI');
const path = require('path')

const app = express();
// const checksum = require('./paytm/checksum/checksum')
const cors = require("cors");
app.use(cors());



//bodyParser middleware
app.use(express.json());

//Mongoose Connection
mongoose
    .connect(db,{ useNewUrlParser: true ,useCreateIndex:true, useUnifiedTopology: true})
    .then( console.log('Connected to Mongoose') )
    .catch(err=> console.log(err))


// // paytm checkup

// app.post('https://localhost:5000/test',(req,res)=>{
//     console.log('submited')
//     // res.redirect('http://localhost:3000')

//     var paramlist = req.body;
//     console.log(JSON.stringify(paramlist))
    

//     if(checksum.verifychecksum(paramlist, 'GR5x7HQBjQg&%1Zp'))
//     {
//         console.log("true");
//         console.log(paramlist);
//         // res.redirect('http://localhost:3000')
//         // res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
//     }else        {
//         console.log("false");
//         res.redirect('https://localhost:3000')
//         // res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
//     };

// })



//routes
app.use('/api/showpost',require('./routes/showpost'));
app.use('/api/showdetails',require('./routes/showdetails'));
app.use('/api/findpost',require('./routes/findPost'));
app.use('/paymentdetails',require('./routes/paymentdetails'));
app.use('/api/onSuccess',require('./routes/onSuccess'));
app.use('/api/addaccount',require('./routes/addaccount'));
app.use('/api/register',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/fblogin',require('./routes/api/fblogin'));
app.use('/paytm',require('./routes/paytm/paytm'));
app.use('/test',require('./routes/paytm/test'));

//Serve static asserts if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{console.log(`server running on port ${port}`)});
// app.listen(5000);