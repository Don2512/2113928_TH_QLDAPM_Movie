import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Movie } from '../Movie';
import { MovieService } from '../Movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {
  adventure: Movie  = {
    id: 1,
    name: "",
    description: "",
    photo: "",
    dayStart: new Date("2024-01-01"),
    dayEnd: new Date("2024-01-31")
  };
  MovieService: MovieService = inject(MovieService);
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.MovieService.getAddMovies(this.adventure);
    this.router.navigate(['/']);
  }    
}
