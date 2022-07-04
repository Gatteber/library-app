console.log("Hello, World!");

let myLibrary = [];

//book constructor
function Book(title, author, pageCount, read, liked) {
    this.title = title,
    this.author = author,
    this.pageCount = pageCount,
    this.read = read,
    this.liked = liked
}

const test = new Book("Lord of the Rings", "JRR Tolkien", "1200 Pages", true, true);
console.log(test.title);
myLibrary.push(test);
console.log(myLibrary[0]);
document.body.innerHTML = myLibrary[0].title;
