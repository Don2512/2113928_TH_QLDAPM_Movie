const Movie = require("../Model/movie")



module.exports = class MovieController{

    static async apiAllListMovie(req, res, next) { 
        try { 
          const listMovie = await Movie.getAllListMove();
          
          res.status(200).json(listMovie);
        } catch (error) {
          res.status(500).json({ error: error });
        }
    }
}