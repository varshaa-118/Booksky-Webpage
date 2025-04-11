// Selecting elements
var popOverlay = document.querySelector(".overlay");
var popUp = document.querySelector(".pop");
var addButton = document.querySelector(".add");
var cancelButton = document.getElementById("cancel-pop");
var addBookButton = document.getElementById("add-book");
var container = document.querySelector(".containerr");

// Show the popup
addButton.addEventListener("click", function () {
    popOverlay.style.display = "block";
    popUp.style.display = "block";
});

// Hide the popup
cancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    popOverlay.style.display = "none";
    popUp.style.display = "none";
});

// Add a new book
addBookButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get input values
    var title = document.getElementById("book-title").value.trim();
    var author = document.getElementById("book-auth").value.trim();
    var description = document.getElementById("book-desc").value.trim();

    if (!title || !author || !description) {
        alert("All fields are required!");
        return;
    }

    // Append new book
    container.innerHTML += `
        <div class="info">
            <h2>${title}</h2>
            <h4>${author}</h4>
            <p>${description}</p>
            <button onclick="deleteBook(this)">Delete</button>
        </div>
    `;

    // Clear inputs and hide popup
    document.getElementById("book-title").value = "";
    document.getElementById("book-auth").value = "";
    document.getElementById("book-desc").value = "";
    popOverlay.style.display = "none";
    popUp.style.display = "none";
});

// Delete a book
function deleteBook(button) {
    button.parentElement.remove();
}
