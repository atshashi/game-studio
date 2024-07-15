class GameStudio{
    name;
    foundedYear;
    country;
    #username;
    #password;
    #nonReleasedGames;
    #releasedGame;

    constructor(name,
        foundedYear,
        country,
        username,
        password,
        nonReleasedGames,releasedGame){

        this.name = name;
        this.foundedYear =foundedYear;
        this.country = country;
        this.#username = username;
        this.#password = password;
        this.#nonReleasedGames = nonReleasedGames;
        this.#releasedGame = releasedGame;
    }

    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }

    getFoundedYear(){
        return this.foundedYear ;
    }
    
    setFoundedYear(newYear){
        this.foundedYear = newYear;
    }

    getCountry(){
        return this.country;
    }
    setCountry(newCountry){
        this.country = newCountry;
    }
    age(){
        let now = new Date();
        let currentYear = now.getFullYear();
        return currentYear - this.foundedYear;
    }
    authentication(username1,password1){
        if(username1 === this.#username && password1 === this.password1){
            return this.#releasedGame,this.#nonReleasedGames;
        }
        else{
            return this.#releasedGame;
        }
    }
}

class videogame extends GameStudio{
    #title;
    #releaseYear;
    #genre;
    #developer;
    #released;
    constructor(name,
        foundedYear,
        country,
        username,
        password,
        nonReleasedGames,
        title,
        releaseYear,
        genre,
        developer){
            super(name,
                foundedYear,
                country,
                username,
                password,
                nonReleasedGames)

            this.#title = title;
            this.#releaseYear = releaseYear;
            this.#genre = genre;
            this.#developer = developer;
            this.#released = released;
    }

    getDeveloper(){
        return this.#developer;
    }

    getTitle(){
        return this.#title;
    }
    setTitle(newTitle){
        this.#title = newTitle;
    }


    getReleaseYear(){
        return this.#releaseYear;
    }
    setReleaseYear(year){
        this.#releaseYear = year;
    }

    
    getGenre(){
        return this.#genre;
    }
    setGenre(newgenre){
        this.#genre = newgenre;
    }

    
    getReleased(){
        return this.#released;
    }
    setReleased(val){
        this.#released = val;
    }
}

function printDetails(){
    console.log(this.name,this.foundedYear,this.country);
    console.log(this.name,this.foundedYear,this.country);
}

videogame.prototype(printDetails);
