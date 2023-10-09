const express = require('express')

const app = express()

app.get('', (req, res) =>{
    res.send(`
    <div style= "padding:30px;text-align:center;background-color:#e7c5c5;font-size:18px">
    <a href="/">Sunday School</a>
    <a href="/courses">Courses</a>
    <a href="/contact">Contact</a> </div>
    <h1 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Learn coding in a day, make a career in a year!</h1>
    <p style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Sunday School is an online platform design to help young minds
     to improve their skills with advance technology. Sunday School is to provide a supportive and collaborative
     
     environment to help each other develop their skills and create projects together. 
     Members of the group often come together to work on specific projects, to discuss the latest technology trends.
     They also host hackathons and workshops to help people learn the basics of coding and develop their skills further.</p>
    `
    
    )
})
app.get('/Courses', (req, res) =>{
    res.send(`
    <div style= "font-size:18px;padding:30px;text-align:center;background-color:#e7c5c5;">
    <a href="/">Sunday School</a>
    <a href="/courses">Courses</a>
    <a href="/contact">Contact</a>
    </div>
    <h2 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Online Classes For Remote Learning.</h2>
    <p style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Frontend Development html5, css3, bootstrap, javascript, jquery, react, vue.js, angular</p>
    <p style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Backend Development python, java, php, sql, node, express, mongo DB, git, django</p>`)
})

app.get('/contact', (req, res) =>{
    res.send(`
    <div style= "font-size:18px;padding:30px;text-align:center;background-color:#e7c5c5;">
    <a href="/">Sunday School</a>
    <a href="/courses">Courses</a>
    <a href="/contact">Contact</a></div>
   
    <h1 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;" >We would love to hear from you!</h1>
    <h1 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">You can either e-mail us or call us.</h1>
    <h2 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Address</h2>
    <h2 style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Bangalore, India</h2>
    <h2 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Email</h2>

    <h2 style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">contact@sundayschool.co.in</h2>
    <h2 style= "font-size:23px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">Phone</h2>
    <h2 style= "font-size:19px;text-align:center;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;">+91 9100014002</h2>
   `)
})
app.listen(8080)