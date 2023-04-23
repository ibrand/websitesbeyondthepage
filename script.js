/*
This is your site JavaScript code - you can add interactivity and carry out processing
*/



let studentwebsitelist = document.getElementsByClassName("web-image");
let studentcardlist = document.getElementsByClassName("student");
console.log("javascript baby");
console.log(studentwebsitelist[0]);
console.log(studentcardlist[1]);
 
for (var i = 0; i < studentwebsitelist.length; i++) { 
    let studentcard = studentcardlist[i];
    // studentwebsitelist[i].addEventListener("mouseenter", (e, i) => {studentcard.style.outlineColor="hotpink"});
    studentwebsitelist[i].addEventListener("mouseenter", (e, i) => {studentcard.style.outlineWidth="4px"});
    studentwebsitelist[i].addEventListener("mouseenter", (e, i) => {studentcard.style.backgroundColor="#5514ff"});

    studentwebsitelist[i].addEventListener("mouseleave", (e, i) => {studentcard.style.backgroundColor="#3c0eb6"});
    studentwebsitelist[i].addEventListener("mouseleave", (e, i) => {studentcard.style.outlineWidth="1px"});
    studentwebsitelist[i].addEventListener("mouseleave", (e, i) => {studentcard.style.outlineColor="#8de4ed"});

    // console.log(studentlist[i]);
}
