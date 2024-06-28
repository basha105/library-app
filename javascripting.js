const myLibrary = [];

let i=0;

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.index = myLibrary.length;
    this.read = false;
    
}

function addBookToLibrary(myBook) {
    myLibrary.push(myBook);
    displayNewBook(myBook);
}

const container = document.querySelector("#container");

function displayLibrary(currentLibrary) {
    let allCards = document.getElementsByClassName("cards");
    for (let card in allCards) {
        card.remove();
    }
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
    deleteButton.addEventListener("click", ()=> {
        newCard.remove();
        let currentIndex = myBook.index;
        myLibrary.splice(currentIndex, 1);
        for (let j=0; j<myLibrary.length; j++) {
            if (myLibrary[j].index >= currentIndex) {
                myLibrary[j].index = myLibrary[j].index - 1;
            }
        }
        console.table(myLibrary);
    })

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "Read";
    readButton.addEventListener("click", ()=> {
        if (myBook.read == false) {
            myBook.read = true;
        }
        else {
            myBook.read = false;
        }
        console.table(myLibrary);

    })

    
    newCard.appendChild(readButton);
    readButton.addEventListener("click", ()=> {

    })
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
    console.table(myLibrary);
    displayLibrary(myLibrary);
})



 displayLibrary(myLibrary);




