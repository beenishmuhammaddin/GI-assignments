//define the make_album function.
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions & creating 3 variables with different values.
var album1 = make_album("Beenish", "album title 1");
var album2 = make_album("Asif", "album title 2");
//calling amake_album function with third parameters
var album3 = make_album("Bella", "album title 3", 10);
//printing the variable.
console.log(album1);
console.log(album2);
console.log(album3);
