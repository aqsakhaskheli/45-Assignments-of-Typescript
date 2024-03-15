function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}

let c1 = cityCountry ("Lahore", "Pakistan");
let c2 = cityCountry ("Tokyo", "Japan");
let c3 = cityCountry (" Paris", "France");

console.log(c1);
console.log(c2);
console.log(c3);
