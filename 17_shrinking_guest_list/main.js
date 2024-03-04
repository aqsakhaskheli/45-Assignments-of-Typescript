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
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on the time, so I can only invite two guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (Lasttwo) { return console.log("Heyyyyy....!!!! Luckly ".concat(Lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
