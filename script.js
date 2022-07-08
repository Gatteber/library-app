
let myLibrary = [{
    author: "JK Rowling",
    isDisplayed: false,
    liked: "No",
    pageCount: "350",
    read: "Yes",
    title: "Harry Potter",
},
{
    author: "JRR Tolkein",
    isDisplayed: false,
    liked: "No",
    pageCount: "350",
    read: "Yes",
    title: "Lord of the Rings",
},
{
    author: "Bronte",
    isDisplayed: false,
    liked: "No",
    pageCount: "350",
    read: "Yes",
    title: "Wuthering Heights",
}
];

//book constructor
function Book(title, author, pageCount, read, liked) {
    this.title = title,
    this.author = author,
    this.pageCount = pageCount,
    this.read = read,
    this.liked = liked,
    this.isDisplayed = false
}

//modal open/close
const openModalButtons = document.querySelectorAll ('[data-modal-target]');
const closeModalButtons = document.querySelectorAll ('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal') //get closest parent with modal class
        closeModal(modal);
    })
})

function openModal (modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal (modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


//form submission
const getForm = document.getElementById('book-form')

getForm.addEventListener("submit", (event) => {
    event.preventDefault() //prevent form autosubmit

    const bookTitle = document.getElementById('bookName').value
    const bookAuthor = document.getElementById('bookAuthor').value
    const pageCount = document.getElementById('pageCount').value
    const bookRead = document.getElementById('bookRead').value
    const bookLiked = document.getElementById('bookLiked').value

    const createBook = new Book(bookTitle, bookAuthor, pageCount, bookRead, bookLiked)
    myLibrary.push(createBook)

    //renderLib()
    getForm.reset()
    closeModal(modal)
})

//render
function renderLib() {
    for(i=0; i < myLibrary.length; i++) {
        //make new cards
        const getBody = document.querySelector('.card-body')
        const newCard = document.createElement('div')
        getBody.appendChild(newCard)
        newCard.classList.add('cardspace')
        console.log("under construction")
    }
        const renderBooks = document.querySelectorAll('.cardspace')
        renderBooks.forEach(book => {
            const renderTitle = document.createElement('div')
            book.appendChild(renderTitle)
            renderTitle.classList.add('card-title')
            //renderTitle.innerHTML = myLibrary[book].value

            
        })
}

renderLib()

//form submission
const bookSubmission = document.getElementById('submitBook')
const submissionTitle = document.getElementById('bookName')
const submissionAuthor = document.getElementById('authorName')
const submissionPageCount = document.getElementById('pagecount')
const submissionRead = document.getElementById('bookRead')
const submissionLiked = document.getElementById('bookLiked')
bookSubmission.addEventListener("click", () => {
    const createBook = new Book(submissionTitle.value,submissionAuthor.value, submissionPageCount.value, submissionRead.value, submissionLiked.value)
    myLibrary.push(createBook)
    //console.log(myLibrary[0])
    const getCardBody = document.querySelector('.card-body')
    const newBook = document.createElement('div')
    getCardBody.appendChild(newBook)
    newBook.setAttribute('id', submissionTitle.value)
    //reset form (no submission, all data stored locally)
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('pagecount').value='';
    closeModal(modal)
    addTemplate()
})

function addTemplate () {
    //loop library, add new template for each
    for (i=0; i < myLibrary.length; i++) {
        if (myLibrary[i].isDisplayed == true) continue
        const myTemplate = elementFromHtml(`
                <div class="card">
                <div class="info">
                    <div class="info-title">
                        <p class="text-title">Title:</p>
                    </div>
                    <div class="info-author">
                        <p class="text-author">Author:</p>
                    </div>
                    <div class="info-pagecount">
                        <p class="text-pagecount">Page count:</p>
                    </div>
                    <div class="info-read">
                        <p class="text-read">Read?</p>
                    </div>
                    <div class="info-liked">
                        <p class="text-liked">Liked?</p>
                    </div>
                </div>
                <div class="user-response">
                    <div class="user-title">
                        <p class="text-title-user"></p>
                    </div>
                    <div class="user-author">
                        <p class="text-author-user"></p>
                    </div>
                    <div class="user-pagecount">
                        <p class="text-pagecount-user"></p>
                    </div>
                    <div class="user-read">
                        <p class="text-read-user"></p>
                    </div>
                    <div class="user-liked">
                        <p class="text-liked-user"></p>
                    </div>
                </div>
                <div class="bottom-box">
                    <div class="button-box">
                        <p>Toggle</p>
                        <button class="button-read">Read</button>
                        <button class="button-liked">Liked</button>
                    </div>
                    <div class="delete-box">
                        <button class="button-delete">X</button>
                    </div>
                </div>
                </div>
                `);
        const addNewBook = document.getElementById(myLibrary[i].title)
        addNewBook.appendChild(myTemplate)
        const addTitle = myTemplate.querySelector('.text-title-user')
        const addAuthor = myTemplate.querySelector('.text-author-user')
        const addPagecount = myTemplate.querySelector('.text-pagecount-user')
        const addRead = myTemplate.querySelector('.text-read-user')
        const addLiked = myTemplate.querySelector('.text-liked-user')
        addTitle.innerHTML = myLibrary[i].title
        addAuthor.innerHTML = myLibrary[i].author
        addPagecount.innerHTML = myLibrary[i].pageCount
        addRead.innerHTML = myLibrary[i].read
        addLiked.innerHTML = myLibrary[i].liked
        myLibrary[i].isDisplayed = true
        const btnRead = myTemplate.querySelector('.button-read')
        const btnLiked = myTemplate.querySelector('.button-liked')
        const btnDelete = myTemplate.querySelector('.button-delete')
        const assignIndex = myLibrary.indexOf(myLibrary[i])
        btnRead.setAttribute('id', myLibrary.indexOf(myLibrary[i]))
        btnLiked.setAttribute('id', myLibrary.indexOf(myLibrary[i]))
        btnDelete.setAttribute('id', myLibrary.indexOf(myLibrary[i]))
        btnDelete.addEventListener("click", () => {
            console.log("I was clicked!" + myLibrary[assignIndex].title)
            const deleteItem = document.querySelector('.card-body')
            const remakeBody = document.querySelector('.container')
            const newBody = document.createElement('div')
            remakeBody.appendChild(newBody)
            newBody.classList.add("card-body")
            myLibrary.splice(assignIndex)
            deleteItem.remove()
            for (i=0; i<myLibrary.length; i++) {
                myLibrary[i].isDisplayed = false;
            }
            addTemplate()
        })
        // const test = myLibrary.indexOf(myLibrary[i])
    }
}

//take in pre-prepared html
function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

// const testDeleteButtons = document.querySelectorAll('.button-delete')

// testDeleteButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("I was clicked!")
//     })
// })





// UNUSED CODE


// const addBook = document.querySelector('.add-book');
// addBook.addEventListener('click', () => {
//     const addADiv = document.querySelector('.card-body')
//     const newCard = document.createElement('div');
//     const newTitle = document.createElement('div');
//     newCard.classList.add('card');
//     newTitle.classList.add('info');
//     addADiv.appendChild(newCard);
//     newCard.appendChild(newTitle);
// })

// const test = new Book("Lord of the Rings", "JRR Tolkien", "1200 Pages", true, true);
// console.log(test.title);
// myLibrary.push(test);
// console.log(myLibrary[0]);
// document.body.innerHTML = myLibrary[0].title;


//UNUSED CODE END



//DATA CLASSES AND STUFF

//card | info, user-response, bottom-box | rest

// ["info-title", "info-author", "info-pagecount", "info-read", "info-liked", "user-title", "user-author", "user-pagecount", "user-read", "user-liked", "button-box", "delete-box"]

// const myTemplate = elementFromHtml(`
// <div class="card">
// <div class="info">
//     <div class="info-title">
//         <p class="text-title">Title:</p>
//     </div>
//     <div class="info-author">
//         <p class="text-author">Author:</p>
//     </div>
//     <div class="info-pagecount">
//         <p class="text-pagecount">Page count:</p>
//     </div>
//     <div class="info-read">
//         <p class="text-read">Read?</p>
//     </div>
//     <div class="info-liked">
//         <p class="text-liked">Liked?</p>
//     </div>
// </div>
// <div class="user-response">
//     <div class="user-title">
//         <p class="text-title-user"></p>
//     </div>
//     <div class="user-author">
//         <p class="text-author-user"></p>
//     </div>
//     <div class="user-pagecount">
//         <p class="text-pagecount-user"></p>
//     </div>
//     <div class="user-read">
//         <p class="text-read-user"></p>
//     </div>
//     <div class="user-liked">
//         <p class="text-liked-user"></p>
//     </div>
// </div>
// <div class="bottom-box">
//     <div class="button-box">
//         <p>Toggle</p>
//         <button>Read</button>
//         <button>Liked</button>
//     </div>
//     <div class="delete-box">
//         <button>X</button>
//     </div>
// </div>
// </div>
// `);

// testClass.appendChild(myTemplate);

// const testHtml = myTemplate.querySelector('.text-title-user');
// testHtml.innerHTML = "Hello world";