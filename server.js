const express = require('express');
require('dotenv').config();
const bootcamps = require('./routers/bootcamps');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT

//middleware
// const logger = (req,res,next) => {
//     //console log the request details
//     console.log(`${req.method}:  ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next();
// }

app.use(morgan('dev'))

//mount Routes
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
    console.log(PORT, `Server running on port : ${PORT}`);
})
