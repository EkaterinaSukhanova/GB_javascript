'use strict';

const genres = ["Детектив", "Комедия", "Триллер"];
const films = [];

class Film {
    constructor(name, numGenre, year = 0, country = ""){
        this.name = name;
        this.genre = genres[numGenre];
        this.year = year;
        this.country = country;
        this.comments = [];
    }
    addComment(text, author, numberStars){
        this.comments.push( new Comment(text, author, numberStars) );
    }
    rating(){
        let sumStars = 0;
        this.comments.forEach( comment => sumStars += comment.numberStars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

class Comment{
    constructor(text, userAuthor, numberStars){
        this.text = text;
        this.author = userAuthor;
        this.numberStars = numberStars;
    }
}

films.push( new Film("Поцелуй навылет", 1, 2005, "США"));
films[0].addComment("Очень смешно! Всем советую.", "Alina94", 5);
films[0].addComment("Осторожно, черный юмор.", "Nico222", 3);

films.push( new Film("В джазе только девушки", 1, 1959, "США"));
films[1].addComment("Милый и забавный фильм.", "Niko222", 4);
films[1].addComment("Хороший фильм.", "Alina94", 5);
films[1].addComment("Хороший фильм для вечернего отдыха. Очень понравился.", "Moti87Put", 5);

films.push( new Film("Невидимый гость", 0, 2016, "Испания"));
films[2].addComment("Смотрел на одном дыхании! Очень интересно.", "Moti87Put", 5);
films[2].addComment("Странный конец. Не для меня.", "Niko222", 3);

films.push( new Film("Исходный код", 2, 2011, "США, Канада"));
films[3].addComment("Не стал моим любимым фильмом, но он хорош.", "Niko222", 4);

films.push( new Film("Престиж", 2, 2006, "США, Великобритания"));
films[4].addComment("Кто любит фильмы, в которых все становится понятно " +
    "только в конце, это для вас! Рекомендую.", "Moti87Put", 5);

function getFilmsGenre( genre ) {
    const foundFilms = [];
    for (let film of films){
        if (film.genre === genre){
            foundFilms.push(film);
        }
    }
    return foundFilms;
}


console.log(films[2].rating());

console.log(getFilmsGenre("Комедия"));


