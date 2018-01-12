console.log("now time to digin to arrow functions");

/* const square = function(a) {
    return a * a;
};

console.log("square ==> ", square(2));

const squarearrow = a => {
    return a * a
}; 

console.log("square ==>", squarearrow(3)); */
const fullName = "Danuka Wijetunge";

/* const getFirstName = (fullname) => {
    return fullname.split(" ")[0];
}; */


const getFirstName = fullname => fullname.split(" ")[0];

console.log(getFirstName(fullName));