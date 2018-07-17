'use strict';

const genres = ["Детектив", "Комедия", "Триллер"];
const films = [];

class Film {
    constructor(name, numGenre, year = 0, country = "", imageName){
        this.name = name;
        this.genre = genres[numGenre];
        this.year = year;
        this.country = country;
        this.comments = [];
        this.img = imageName + ".jpg";
    }
    addComment(text, author, numberStars){
        this.comments.push( new Comment(text, author, numberStars) );
    }
    rating(){
        let sumStars = 0;
        this.comments.forEach( comment => sumStars += parseInt(comment.numberStars));
        return (this.comments.length > 0) ? (sumStars / this.comments.length).toFixed(1) : 0;
    }
}

class Comment{
    constructor(text, userAuthor, numberStars){
        this.text = text;
        this.author = userAuthor;
        this.numberStars = numberStars;
    }
}

films.push( new Film("Поцелуй навылет", 1, 2005, "США", "kiss_kiss"));
films[0].addComment("Очень смешно! Всем советую.", "Alina94", 5);
films[0].addComment("Осторожно, черный юмор.", "Nico222", 3);

films.push( new Film("В джазе только девушки", 1, 1959, "США", "jazz"));
films[1].addComment("Милый и забавный фильм.", "Niko222", 4);
films[1].addComment("Хороший фильм.", "Alina94", 5);
films[1].addComment("Хороший фильм для вечернего отдыха. Очень понравился.", "Moti87Put", 5);

films.push( new Film("Невидимый гость", 0, 2016, "Испания", "guest"));
films[2].addComment("Смотрел на одном дыхании! Очень интересно.", "Moti87Put", 5);
films[2].addComment("Странный конец. Не для меня.", "Niko222", 3);

films.push( new Film("Исходный код", 2, 2011, "США, Канада", "code"));
films[3].addComment("Не стал моим любимым фильмом, но он хорош.", "Niko222", 4);

films.push( new Film("Престиж", 2, 2006, "США, Великобритания", "prestige"));
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


