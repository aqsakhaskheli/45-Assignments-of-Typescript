// creating a Guest List Array
var guestList = ["Mishal", "Kainat", "Nirmal", "Aleena"];
// Making Variable for those guest who cant come
var notComing = guestList[2];
// printing the name of guest who cant come
console.log(notComing, "she is not coming");
// Adding or removing values from guest list Array
guestList.splice(2, 1, "Rabail");
// Message printing for Bigger Table
console.log("Good News...! We have Found a Bigger Table For Dinner");
// Adding a new guest at Starting index of Array
guestList.unshift("Ali");
// Adding a new guest at ending index of Array 
guestList.push("Aaqib");
// Get a middle index of our guest list Array 
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Ahmed");
//  Printing message of updated List
console.log("Updated List of Our Guests");
// Sending a invition message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Asalam O Alikum ".concat(oneguest, ", would you like to dinner with me?")); });
