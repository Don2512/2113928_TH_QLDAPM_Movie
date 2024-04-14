import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie } from '../Movie';
import { MovieService } from '../Movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  MovieList: Movie[] = [];
  MovieService: MovieService = inject(MovieService);

  constructor() {
    this.MovieService.getAllMovies().then((MovieList: Movie[]) => {
      this.MovieList = MovieList;
    });
  }
}
