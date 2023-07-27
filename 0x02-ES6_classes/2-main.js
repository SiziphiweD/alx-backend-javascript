import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name);
c1.name = "Python 101"; // Set the name as a string
console.log(c1);

try {
    c1.name = 12; // This will throw an error since 12 is not a string
} catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]); // Provide the length as a number
} catch(err) {
    console.log(err);
}

