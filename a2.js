
/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Patel Sarfarz Hifzurrehman____________________ Student ID: __174554212____________ Date: __2/5/23_________
*
********************************************************************************/ 


async function run() {
    try {
        var data = require("./modules/studentsdata.js");
        await data.initialize();

        const students = await data.getAllstudents();
        console.log(`Successfully retrieved ${students.length} students`);

        const courses = await data.getcourses();
        console.log(`Successfully retrieved ${courses.length} courses`);

        const TAs = await data.getTAs();
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    } catch (err) {
        console.log(err);
    }
}

run();
