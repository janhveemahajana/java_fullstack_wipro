import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-movielist',
  imports: [FormsModule],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {

  movielist: Movie[] = [];
  movieId: string = '';
  movieIdAdd: string = '';
  movieNameAdd: string = '';
  movielanguageAdd: string = '';
  imdbRating: number = 0;
  constructor(private movieService: MovieserviceService) {
    this.movielist = this.movieService.getMovies();
  }

  delete(): void {
    this.movieService.deleteByMovieId(this.movieId);
    this.movielist = this.movieService.getMovies();
    this.movieId = '';
  }

  save() {
    const newMovie: Movie = {
      movieId: this.movieIdAdd,
      movieName: this.movieNameAdd,
      movielanguage: this.movielanguageAdd,
      imdbRating: this.imdbRating
    };
    this.movieService.addMovie(newMovie);
    this.movielist = this.movieService.getMovies();
    this.movieIdAdd = '';
    this.movieNameAdd = '';
    this.movielanguageAdd = '';
    this.imdbRating = 0;
}

update() {
  const newMovie: Movie = {
      movieId: this.movieIdAdd,
      movieName: this.movieNameAdd,
      movielanguage: this.movielanguageAdd,
      imdbRating: this.imdbRating
    };
    this.movieService.updateMovie(newMovie);
    this.movielist = this.movieService.getMovies();
    this.movieIdAdd = '';
    this.movieNameAdd = '';
    this.movielanguageAdd = '';
    this.imdbRating = 0;
}
edit() {
  const movie = this.movieService.findByMovieId(this.movieId);
  if (movie) {
    this.movieIdAdd = movie.movieId;
    this.movieNameAdd = movie.movieName;
    this.movielanguageAdd = movie.movielanguage;
    this.imdbRating = movie.imdbRating;
  } else {
    alert('Movie not found');
}
}
}
