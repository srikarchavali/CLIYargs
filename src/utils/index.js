const moviesArray = []; 
class Movie {
    constructor( title, genre, actor = "Not Specified", year ) {
    this.title=title;
    this.actor=actor;
    this.genre=genre;
    this.year=year
    }
    add() {
        moviesArray.push(this);
    }
}

module.exports = {Movie, moviesArray} 