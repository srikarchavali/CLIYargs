const yargs = require("yargs");
const {Movie, moviesArray} = require("./utils")

console.log(process.argv);
console.log(yargs.argv);

const app = (args) =>{
    if(args.add){
        const movie = new Movie(args.title, args.genre, args.actor, args.year)
        movie.add()
        console.log(moviesArray);
    }else if(args.addMany){
        const movie1 = new Movie(args.title, args.genre, args.actor, args.year)
        movie1.add()
        const movie2 = new Movie(args.title2, args.genre2, args.actor2, args.year2)
        movie2.add()
        console.log(moviesArray);
    }else{
        console.log("incorrect command");
    }
};

app(yargs.argv)