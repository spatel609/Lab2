const fs = require("fs");
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

module.exports.initialize = async function () {
    try {
        const coursesData = await fs.promises.readFile('./data/courses.json', 'utf8');
        const studentsData = await fs.promises.readFile('./data/students.json', 'utf8');
        dataCollection = new Data(JSON.parse(studentsData), JSON.parse(coursesData));
    } catch (err) {
        throw new Error(`Error! unable to load data: ${err}`);
    }
}

module.exports.getAllstudents = function () {
    if (dataCollection.students.length == 0) {
        throw new Error("Query returned 0 results");
    }
    return dataCollection.students;
}

module.exports.getcourses = function () {
    if (dataCollection.courses.length == 0) {
        throw new Error("Query returned 0 results");
    }
    return dataCollection.courses;
}

module.exports.getTAs = function (){
    const filteredstudents = dataCollection.students.filter(s => s.TA == true);

    if (filteredstudents.length == 0) {
        throw new Error("Query returned 0 results");
    }
    return filteredstudents;
}
