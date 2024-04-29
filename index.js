const express = require("express");
const session = require("express-session"); 
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const ejs = require("ejs");
const path = require("path");

const app = express();


const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})