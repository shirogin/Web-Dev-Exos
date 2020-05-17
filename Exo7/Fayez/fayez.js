//Home Work
var movies=[];
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

movies.forEach(element => {
    console.log("#Rank"+element.Rank+" :");
    console.log("Title : "+element.Title);
    console.log("watched : " + element.watched);
});





    