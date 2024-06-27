const myLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(myBook) {
    myLibrary.push(myBook);
}

const container = document.querySelector("#container");

function displayLibrary(currentLibrary) {
    for (let i=0; i<currentLibrary.length; i++) {
        let thisBook = currentLibrary[i];
        const currentCard = document.createElement("div");
        currentCard.classList.add("cards");
        currentCard.textContent = String(thisBook.title) + " by " + String(thisBook.author) + ", published in " + String(thisBook.year);
        container.appendChild(currentCard);
    }
 }

const newBookButton = document.querySelector("#newBook");
newBookButton.addEventListener("click", () => {
    
})



 // let newBook = new Book("Gatsby", "Fitzgerald", 1925);
 // addBookToLibrary(newBook);
 // displayLibrary(myLibrary);




