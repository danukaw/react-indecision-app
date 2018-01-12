console.log("arrow function part two");

// argument array cannt be accessed via arrow function

/* var add = function (a, b) {
    console.log(arguments);
    return a + b;
} */

var add = (a, b) => {
    //console.log(arguments); arguments array cannot be accessed
    return a + b;
}

const name = "nimesha";
const cities = ['Kgalle', 'Wattala', 'Colombo'];

const profile = {
    name : "Danuka Wijetunge",
    cities : ['Monaragala', 'Matara', 'Colombo'],
    citiesLivedIn () {
       /*  this.cities.forEach((city) => {
            console.log(this.name + " has lived in "+ city);
        }); */
        return this.cities.map((city)=> this.name + " has lived in " + city);
    }
}

//console.log(add(55,1,3000));
console.log(profile.citiesLivedIn());

const multyplyer = {
    numbers : [5, 6],
    multyplyby : 2,
    multiply() {
        return this.numbers.map(number => this.multyplyby * number);
    }
}

console.log(multyplyer.multiply());