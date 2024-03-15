function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// Creating a function of great magicians
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
// Creating a function of Unchanged Magicians
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}
var magician3 = ["Aoun Ali", "Fatima Batool", "Yusra Batool"];
var greatMagicians = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagicians);
