import { handlerRemoveMovie } from "./events.js";

/**
 * Show a movie in page
 * @param {object} movie Movie to be shown in page
 */
const showMovie = (movie) => {
  // get the tbody of table
  const tbody = document.getElementById("tbody");

  // Create a <tr>
  const tr = document.createElement("tr");

  // Create title <td>
  const titleTd = document.createElement("td");
  titleTd.textContent = movie.title;

  // Create year <td>
  const yearTd = document.createElement("td");
  yearTd.textContent = movie.year;

  // Create icon <td>
  const removeTd = document.createElement("td");

  // Create icon <i> to remove the movie
  const removeIcon = document.createElement("i");
  removeIcon.classList.add("far");
  removeIcon.classList.add("fa-trash-alt");
  removeIcon.setAttribute("data-id", movie.id);
  removeIcon.addEventListener("click", handlerRemoveMovie);
  removeTd.appendChild(removeIcon);

  // Append <td>'s to <tr>
  tr.appendChild(titleTd);
  tr.appendChild(yearTd);
  tr.appendChild(removeTd);

  // Append <tr> to <tbody>
  tbody.appendChild(tr);
};

/**
 * Remove a movie from page
 * @param {number} movieId Id of the movie to be removed from page
 */
const removeMovie = (movieId) => {
  // Get element by its id
  let movieIcon = document.querySelector(`[data-id="${movieId}"]`);
  // Check if movie exist
  if (movieIcon !== null) {
    // Remove table row
    // MovieIcon = <i>
    // MovieIcon.parentElement = <td>
    // MovieIcon.parentelement.parentElement = <tr>
    movieIcon.parentElement.parentElement.remove();
  }
};

export { showMovie };
export { removeMovie };
