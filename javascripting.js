const myLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(myBook) {
    myLibrary.push(myBook);
    displayNewBook(myBook);
}

const container = document.querySelector("#container");

function displayLibrary(currentLibrary) {
    for (let i=0; i<currentLibrary.length; i++) {
        let thisBook = currentLibrary[i];
        displayNewBook(thisBook);
    }
 }

const newBookButton = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
const submitButton = document.querySelector("#submitForm");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
})

function displayNewBook(myBook) {
    const newCard = document.createElement("div");
    newCard.classList.add("cards");
    newCard.textContent = String(myBook.title) + " by " + String(myBook.author) + ", published in " + String(myBook.year);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    newCard.appendChild(deleteButton);
    container.appendChild(newCard);


}


submitButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;

    let newBook = new Book(title, author, year);
    addBookToLibrary(newBook);
    dialog.close();
})

 displayLibrary(myLibrary);




