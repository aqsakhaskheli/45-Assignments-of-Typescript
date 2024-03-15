// Turn your if-else chain into an if-else chain
// If alien is green, Print a message that the player earned 5 points
let alien_color: string = "green";
if (alien_color == "green"){
    console.log("the player just earned 5 points");
}

// If alien is yellow, print a message that the player earned 10 points
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points");
}

// If alien is red, print a message that the player earned 15 points
else if(alien_color == "red"){
    console.log("the player just earned 15 points");
}
else{
    console.log("Please select right color");
}

// write three versions of this program
// varsion 2
alien_color = "red";
if (alien_color == "green"){
    console.log("the player just earned 5 points");
}
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points");
}
else if(alien_color == "red"){
    console.log("the player just earned 15 points");
}
else{
    console.log("Please select right color");
}

// varison 3
alien_color = "yellow";
if (alien_color == "green"){
    console.log("the player just earned 5 points");
}
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points");
}
else if(alien_color == "red"){
    console.log("the player just earned 15 points");
}
else{
    console.log("Please select right color");
}


