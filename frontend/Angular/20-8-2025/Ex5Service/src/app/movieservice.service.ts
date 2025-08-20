import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  movieList: Movie[] = [
    {movieId:'M01', movieName: 'YJHD', movielanguage: 'Hindi', imdbRating: 5},
    {movieId:'M02', movieName: 'RRR', movielanguage: 'Telugu', imdbRating: 5},
    {movieId:'M03', movieName: 'Inception', movielanguage: 'English', imdbRating: 5},
    {movieId:'M04', movieName: 'Piku', movielanguage: 'Hindi', imdbRating: 5},
    {movieId:'M05', movieName: 'Kakan', movielanguage: 'Marathi', imdbRating: 5}
  ]

  getMovies(): Movie[] {
    return this.movieList;
  }

  deleteByMovieId(movieId: string): void {
    this.movieList = this.movieList.filter(movie => movie.movieId !== movieId);
  }
  addMovie(movie: Movie): void {
    this.movieList.push(movie);
  }
  findByMovieId(movieId: string): Movie | undefined {
    return this.movieList.find(movie => movie.movieId === movieId);
  }

  updateMovie(movie: Movie): void {
    const index = this.movieList.findIndex(e => e.movieId === movie.movieId);
    if (index !== -1) {
      this.movieList[index] = movie;
    } else {
      console.error(`Movie with movieId ${movie.movieId} not found.`);
    }
  }
}
