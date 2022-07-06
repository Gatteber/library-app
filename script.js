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




// const addBook = document.querySelector('.add-book');
// addBook.addEventListener('click', () => {
//     const addADiv = document.querySelector('.card-body')
//     const classArray = ["info", "user-response", "bottom-box"];
//     const classArrayInfo = ["info-title", "info-author", "info-pagecount", "info-read", "info-liked"];

//     const newCard = document.createElement ('div');
//     newCard.classList.add("card");
//     addADiv.appendChild(newCard); //append first child

//     for (let i = 0; i < classArray.length; i++) {
//         const newChild = document.createElement('div');
//         newCard.appendChild(newChild);
//         newChild.classList.add(classArray[i]);
//         //append 3 main children
//     }

//     //needs unique selector
//     for (let i = 0; i < classArrayInfo.length; i++) {
//         const infoAddADiv = document.querySelector('.info');
//         const newChildInfo = document.createElement('div');
//         infoAddADiv.appendChild(newChildInfo);
//         newChildInfo.classList.add(classArrayInfo[i]);
//         //append remaining children??
//     }

// })

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
    //reset form (no submission, all data stored locally)
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('pagecount').value='';
    closeModal(modal)
})


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