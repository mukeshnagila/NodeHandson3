const express = require("express");
const app = express();
const PORT = 2001; 


const middleware1 = (req,res,next) => {
    console.log("Middlewere1 running for all");
    next();
}
const middleware2 = (req,res,next) => {
    console.log("Middlewere2 running");
    next();
}

app.use(middleware1);//Application level middleware
// app.use(middleware2);

app.get("/", (req, res) => {
    console.log("Home page")
    res.send("API is running");
});

app.get("/contact",middleware2, (req, res) => {
    console.log("Contact page by middleware2")
    res.send("API is running fine Contact page");
});

app.get("/student", (req, res) => {
    console.log("student Page")
    res.send("API is running fine student Page");
});

app.get("/about",middleware2, (req, res) => {
    console.log("about page by middleware2")
    res.send("API is running fine about page");
});


app.listen(PORT,() => {
    try{
        console.log(`Your server is running by PORT No- ${PORT}`)
    }
    catch(err){
        console.log(`Error in starting the server, ${err}`)
    }
});