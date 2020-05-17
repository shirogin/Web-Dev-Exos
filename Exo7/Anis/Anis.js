var cinema= [];

function CreateMovie(Name, IMDB, WATCHED)
{
    return {
        Name: Name,
        IMDB: IMDB,
        WATCHED: WATCHED
    };
}
cinema.push(CreateMovie("THE IRISHMAN", 7.9, false)); 
cinema.push(CreateMovie("THE GOD FATHER", 9.2, false));
cinema.push(CreateMovie("THE DARK KNIGHT", 9.0, true));
cinema.push(CreateMovie("THE AVENGERS: END GAME", 8.4, false));
cinema.push(CreateMovie("TRAINING DAY", 7.7, true));
cinema.push(CreateMovie("ANGELS AND DEMONS", 6.7, false));
cinema.push(CreateMovie("BLACK PANTHER", 7.3, false));
cinema.push(CreateMovie("THE DA VINCI CODE", 6.6, true));
cinema.push(CreateMovie("INCEPTION", 8.8, true));
cinema.push(CreateMovie("THE JOKER", 8.5, false));

cinema.forEach(element => {
    console.log(" -------- ");
    console.log("TITLE: "+element.Name);
    console.log("#IMDB : "+element.IMDB);
    console.log("I've watched it: "+element.WATCHED);
});