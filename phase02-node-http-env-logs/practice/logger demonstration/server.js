const express= require('express');
const requestLogger=require('./requestLogger');

const app= express();
const PORT=process.env.PORT || 3000;

app.use(requestLogger);

app.get('/',(req,res )=>{
    res.send('hello');
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT} `);
});