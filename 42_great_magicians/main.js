function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// Creating a function for geart magicians
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { // I stand for index string
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["Aoun Ali", "Fatima Batool", "Yusra Batool"];
make_great(magicians2);
show_magicians(magicians2);
