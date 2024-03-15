function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}  

// Creating a function of great magicians

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) { 
magicians[i] = magicians[i] + " the great"; 
    }
}

// Creating a function of Unchanged Magicians

function make_great2(magicians: string[]): string [] {
    const greatMagicians: string [] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}

const magician3: string[] = ["Aoun Ali", "Fatima Batool", "Yusra Batool"];
const greatMagicians: string[] = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagicians);
