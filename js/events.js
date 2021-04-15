import { saveMovie, deleteMovie } from "./storage.js";
import { showMovie, removeMovie } from "./dom.js";

/**
 * Remove a movie from page and delete it to localStorage
 * @param {object} event Event raise to remove a movie
 */
const handlerRemoveMovie = (event) => {
  // Get icon clicked
  const icon = event.target;

  // Get movie id from icon
  const movieId = icon.dataset.id;

  // Delete the movie from localStorage
  deleteMovie(movieId);

  // Remove movie from page
  removeMovie(movieId);
};

/**
 * Add a movie to page and save it to localStorage
 * @param {object} event Event raise to add a movie
 */
const handlerAddMovie = (event) => {
  // Prevent sending form to backend
  event.preventDefault();

  // Get page elements to create the movie
  const titleText = document.getElementById("titleText");
  const yearText = document.getElementById("yearText");

  // Check if user type a movie titles
  if (titleText.value === "") {
    return;
  }
  // Create a movie object
  const newMovie = {
    title: titleText.value,
    year: parseInt(yearText.value),
  };
  // Add movie to localStorage
  saveMovie(newMovie);

  // Show movie in page
  showMovie(newMovie);

  // Clear form inputs
  titleText.value = "";
  yearText.value = "";
  titleText.focus();
};

export { handlerAddMovie };
export { handlerRemoveMovie };
