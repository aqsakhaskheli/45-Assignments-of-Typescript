function makeAlbum (artist: string, title: string): { artist: string, title: string } {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum ("Ali", "The name of the wind");
console.log(album);

album = makeAlbum ("Aqsa", "The eye of the storm");
console.log(album);

album = makeAlbum ("Ahmed", "The narrow road between desires");
console.log(album);
