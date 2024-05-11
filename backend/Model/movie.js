const conn = require('../config/database');


module.exports = class Movie {

    static async getAllListMove() { 
        try {
            const querySql = "SELECT * FROM Movie";
            const data = await new Promise((resolve, reject) => {
                conn.query(querySql, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            });
            return data;
        } catch (error) {
            console.log(error);
            throw error; // Rethrow the error for proper error handling
        }
    }

    static async CreateMovie(movie) {
        try {
            const querySql = `INSERT INTO Movie (name, description, photo, dayStart, dayEnd)
                              VALUES (?, ?, ?, ?, ?)`;
            const values = [movie.name, movie.description, movie.photo, movie.dayStart, movie.dayEnd];
    
            await new Promise((resolve, reject) => {
                conn.query(querySql, values, (err, result) => {
                    if (err) reject(err);
                    console.log('Thêm dữ liệu thành công!');
                    resolve(result);
                });
            });
        } catch (error) {
            console.log(error);
            throw error; // Rethrow the error for proper error handling
        }
    }
}