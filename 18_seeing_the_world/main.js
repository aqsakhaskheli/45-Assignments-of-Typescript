var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and print its original Order
var countriesToVisit = ["Canada", "Dominica", "Germany", "Australia"];
console.log("Original Order:", countriesToVisit);
// Print the Array in Alphatbetical order without modifying the Actual Array list 
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Original Order
console.log("Still on Original Order:", countriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Original Order
console.log("Still on Original Order:", countriesToVisit);
// We have changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Printing the Array to show that it's back to it's original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Printing the array to show that it's order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
