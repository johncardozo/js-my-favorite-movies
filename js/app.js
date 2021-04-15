import { handlerAddMovie } from "./events.js";
import { loadMovies } from "./storage.js";

// Load and show movies stored in localStorage
loadMovies();

// Get the form to add a new movie
const form = document.querySelector("form");

// Add listener to submit event
form.addEventListener("submit", handlerAddMovie);
