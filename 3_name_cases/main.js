var person = "aqsa Khaskheli";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.replace(/\b\w/g, function (Char) { return Char.toUpperCase(); }));
