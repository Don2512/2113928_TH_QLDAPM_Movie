import { Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
export const routes: Routes = [
    {path: '', component: MovieComponent},
    {path: 'addMovie', component: AddMovieComponent}
];
