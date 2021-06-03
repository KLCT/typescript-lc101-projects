"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// let speedMPH: number = 17500;
var kiloToMars = 225000000;
var kiloToMoon = 384400;
// let miPerKilo: number  = 0.621;
// Part 2: Print Days to Mars
// let miToMars: number = kiloToMars * miPerKilo;
// let hrsToMars: number = miToMars/speedMPH;
// let daysToMars:  number = hrsToMars/24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} ${daysToMars}`);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kiloAway: number): number {
//     let miAway: number = kiloAway*miPerKilo;
//     let hrToDst: number = miAway/speedMPH;
//     let daysToDst: number = hrToDst/24;
//     return daysToDst;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} ${getDaysToLocation(kiloToMars)} and ${getDaysToLocation(kiloToMoon)}`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speed) {
        this.miPerKilo = 0.621;
        this.name = name;
        this.speedMPH = speed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kiloAway) {
        var miAway = kiloAway * this.miPerKilo;
        var hrToDst = miAway / this.speedMPH;
        var daysToDst = hrToDst / 24;
        return daysToDst;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kiloAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var shuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${shuttle.name} ${shuttle.getDaysToLocation(kiloToMoon)}`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kiloToMars));
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the moon', kiloToMoon));
