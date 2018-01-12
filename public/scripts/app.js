"use strict";

console.log("arrow function part two");

// argument array cannt be accessed via arrow function

/* var add = function (a, b) {
    console.log(arguments);
    return a + b;
} */

var add = function add(a, b) {
    //console.log(arguments); arguments array cannot be accessed
    return a + b;
};

var name = "nimesha";
var cities = ['Kgalle', 'Wattala', 'Colombo'];

var profile = {
    name: "Danuka Wijetunge",
    cities: ['Monaragala', 'Matara', 'Colombo'],
    citiesLivedIn: function citiesLivedIn() {
        var _this = this;

        /*  this.cities.forEach((city) => {
             console.log(this.name + " has lived in "+ city);
         }); */
        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};

//console.log(add(55,1,3000));
console.log(profile.citiesLivedIn());

var multyplyer = {
    numbers: [5, 6],
    multyplyby: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multyplyby * number;
        });
    }
};

console.log(multyplyer.multiply());
