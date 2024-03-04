var guestlist = ["Mishal", "Kainat", "Nirmal", "Aleena"];
var dontCome = guestlist[2];
console.log(dontCome, "She is not coming");
guestlist.splice(2, 1, "Rabail");
guestlist.forEach(function (guest) { return console.log("Asalam O Alikum ".concat(guest, ", would you like to dinner with me?")); });
