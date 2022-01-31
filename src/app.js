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
        console.log("add many");
    }else{
        console.log("incorrect command");
    }
};

app(yargs.argv)