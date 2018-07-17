const openFilm = {};

document.addEventListener("DOMContentLoaded", function () {
    for (let genre of genres){
        const newEL = document.createElement("div");
        newEL.classList.add("genre");
        newEL.innerText = genre;
        newEL.addEventListener("click", function() {
            onGenreChoice(genre);
        });
        document.querySelector(".genres").appendChild(newEL);
    }
});

function getFilmByName(filmName) {
    return films.filter( f => f.name === filmName)[0];
}

function getFilmComments(filmName) {
    const film = getFilmByName(filmName);
    return film.comments;

}

function onAddCommentClick(name) {
    const authorValue = document.getElementById(`author-${name}`).value;
    const commentValue = document.getElementById(`comment-${name}`).value;
    const starValue = document.getElementById(`star-${name}`).value;
    const film = getFilmByName(name);
    film.addComment(commentValue, authorValue, starValue);
    onGenreChoice(film.genre)
}

function renderCommentForm(film) {
    const content = `<div class="form-title">Добавьте отзыв фильму ${film.name}</div>
        <div class="form-body">
        <input id="author-${film.name}" class="form-author" placeholder="Ваше имя">
        <input id="comment-${film.name}" class="form-comment" placeholder="Ваш отзыв">
        <input id="star-${film.name}" class="form-star" placeholder="Ваша оценка">
        <button onclick="onAddCommentClick('${film.name}')">Отправить</button>
        </div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");
    form.innerHTML = content;

    form.addEventListener("click", function (event) {
       event.stopPropagation();
       form.classList.add("chosen");
    });
    return form;
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach( c => {
        s += `<div class="comment"><span class="comment-author">${c.author}</span>: ${c.text}</div>`;
    });
    newEl.innerHTML +=
        `<div class="film-comment">${s}</div>`;

    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);

}

function onFilmClick(film, newEl) {
    if(openFilm.hasOwnProperty(film.name)
        && openFilm[film.name] === true){
        newEl.innerHTML =
            `<img src='img/${film.img}' alt='${film.name}'>
             <div class="film-name">
                   <p>${film.name}</p>
                   <p>Год: ${film.year}</p>
                   <p>Страна: ${film.country}</p>
                   <p>Оценка: ${film.rating()}</p></div>
             <div class="clearfix"></div>`;
        openFilm[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        openFilm[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<img src='img/${film.img}' alt='${film.name}'>
                       <div class="film-name">
                            <p>${film.name}</p>
                            <p>Год: ${film.year}</p>
                            <p>Страна: ${film.country}</p>
                            <p>Оценка: ${film.rating()}</p></div>
                        <div class="clearfix"></div>`;

    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl);
    });

    document.querySelector(".films").appendChild(newEl);
}

function onGenreChoice(genreName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsGenre(genreName);
    for (let film of films){
        renderFilm(film);
    }
}