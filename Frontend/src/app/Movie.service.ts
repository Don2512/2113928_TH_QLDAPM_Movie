import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:8080/movie/allListMovie';

  async getAllMovies(): Promise<Movie[]> {
    const data = await fetch(this.url);
    return await data.json();
  }
}
