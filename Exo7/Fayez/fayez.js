//Home Work
/* var movies=[];
// Top 10 movies of 2019
movies[0]= {
    Title : "Parasite",
    Rank : 1,
    watched : true 
};

movies[1]= {
    Title : "Us",
    Rank : 2,
    watched : false 
};

movies[2]= {
    Title : "Knives Out",
    Rank : 3,
    watched : false 
};

movies[3]= {
    Title : "Toy Story 4",
    Rank : 4,
    watched : false 
};

movies[4]= {
    Title : "Avengers: End game",
    Rank : 5,
    watched : true 
};

movies[5]= {
    Title : "The Irishman",
    Rank : 6,
    watched : false 
};

movies[6]= {
    Title : "Little women",
    Rank : 7,
    watched : false 
};

movies[7]= {
    Title : "Booksmart",
    Rank : 8,
    watched : false 
};

movies[8]= {
    Title : "The Farewell",
    Rank : 9,
    watched : false 
};

movies[9]= {
    Title : "Marriage story",
    Rank : 10,
    watched : false 
};
 */
var movies=[];
function CreateMovie(Title,Rank,watched) {
    return{
        Title: Title,
        Rank: Rank,
        watched: watched
    }
}
movies.push(CreateMovie("THE IRISHMAN", 1, false)); 
movies.push(CreateMovie("THE GOD FATHER", 2, true));
movies.push(CreateMovie("THE DARK KNIGHT", 3, true));
movies.push(CreateMovie("THE AVENGERS: END GAME", 4, true));
movies.push(CreateMovie("TRAINING DAY", 5, true));
movies.push(CreateMovie("ANGELS AND DEMONS", 6, false));
movies.push(CreateMovie("BLACK PANTHER", 7, true));
movies.push(CreateMovie("THE DA VINCI CODE", 8, false));
movies.push(CreateMovie("INCEPTION", 9, true));
movies.push(CreateMovie("THE JOKER", 10, true));

movies.forEach(element => {
    console.log("#Rank"+element.Rank+" :");
    console.log("Title : "+element.Title);
    console.log("watched : " + element.watched);
});





    