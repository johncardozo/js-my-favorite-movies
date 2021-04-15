import { showMovie } from "./dom.js";

/**
 * Read the movie list from localStorage and shows it in the page
 */
const loadMovies = () => {
  // Check if browser support localStorage
  if (typeof Storage !== "undefined") {
    // Get movies stored in localStorage and convert it to JSON
    let movieList = JSON.parse(localStorage.getItem("movies"));

    // Check if movie list exist
    if (movieList !== null) {
      // Loop through the movies to show them in page
      movieList.forEach((movie) => {
        showMovie(movie);
      });
    }
  }
};

/**
 * Save a movie in localStorage
 * @param {object} movie The movie to save
 */
const saveMovie = (movie) => {
  // Check if browser support localStorage
  if (typeof Storage !== "undefined") {
    // Get movies stored in localStorage and convert it to JSON
    let movieList = JSON.parse(localStorage.getItem("movies"));

    // Generate id for new movie
    movie.id = uuid.v4();

    // Check if movie list exist
    if (movieList !== null) {
      // Add the movie to list
      movieList.push(movie);

      // Convert JSON into String and store the list in localStorage
      localStorage.setItem("movies", JSON.stringify(movieList));
    } else {
      // Create a new array
      let movies = [];

      // Add the movie to the array
      movies.push(movie);

      // Convert array to JSON and store it in localStorage
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }
};

/**
 * Delete a movie from localStorage
 * @param {number} movieId Movie id of the movie to delete
 */
const deleteMovie = (movieId) => {
  // Check if browser support localStorage
  if (typeof Storage !== "undefined") {
    // Get movies stored in localStorage and convert it to JSON
    let movieList = JSON.parse(localStorage.getItem("movies"));

    // Check if movie list exist
    if (movieList !== null) {
      // Filter movie list
      let newMovieList = movieList.filter((movie) => movie.id != movieId);

      // Convert JSON into String and store the list in localStorage
      localStorage.setItem("movies", JSON.stringify(newMovieList));
    }
  }
};

export { loadMovies };
export { saveMovie };
export { deleteMovie };
