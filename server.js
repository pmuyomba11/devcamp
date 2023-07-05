const express = require('express');
require('dotenv').config();
const bootcamps = require('./routers/bootcamps');

const app = express();
const PORT = process.env.PORT

//middleware
app.use('api/v1/bootcamps', bootcamps);


app.listen(PORT, () => {
    console.log(PORT, `Server running on port : ${PORT}`);
})
