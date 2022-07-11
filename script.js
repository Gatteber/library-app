
 let myLibrary = [];

//book constructor
function Book(title, author, pageCount, read, liked) {
    this.title = title,
    this.author = author,
    this.pageCount = pageCount,
    this.read = read,
    this.liked = liked
}

Book.prototype.isRead = function() {
    return this.read
}

Book.prototype.isLiked = function() {
    return this.liked
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

    getForm.reset()
    closeModal(modal)
    renderLib()
})

//render
function renderLib() {
    for(i=0; i < myLibrary.length; i++) {
        //reset html cardspace -- probably un-necessary
        const getBody = document.querySelector('.card-body')
        getBody.innerHTML = null
    }

    myLibrary.map((book, index) => {
        //add card body and add new card
        const getBody = document.querySelector('.card-body')
        const renderCard = document.createElement('div')
        renderCard.classList.add('new-card')
        renderCard.setAttribute("id", `${index}`)
        getBody.appendChild(renderCard)

        //select new card and add information
        const getCard = document.getElementById(`${index}`)

        //title
        const renderTitle = document.createElement('div')
        getCard.appendChild(renderTitle)
        renderTitle.classList.add('card-title')
        renderTitle.innerHTML = `Title: ${book.title}`

        //author
        const renderAuthor = document.createElement('div')
        getCard.appendChild(renderAuthor)
        renderAuthor.classList.add('card-author')
        renderAuthor.innerHTML = `Author: ${book.author}`

        //pagecount
        const renderPagecount = document.createElement('div')
        getCard.appendChild(renderPagecount)
        renderPagecount.classList.add('card-pagecount')
        renderPagecount.innerHTML = `Page Count: ${book.pageCount}`

        //read
        const renderRead = document.createElement('div')
        getCard.appendChild(renderRead)
        renderRead.classList.add('card-read')
        renderRead.innerHTML = `Read? ${book.read}`

        //liked
        const renderLiked = document.createElement('div')
        getCard.appendChild(renderLiked)
        renderLiked.classList.add('card-liked')
        renderLiked.innerHTML = `Liked? ${book.liked}`

        //buttons
        const readToggle = document.createElement('button')
        getCard.appendChild(readToggle)
        readToggle.classList.add('toggle-read')
        readToggle.innerHTML = "Toggle Read"
        readToggle.addEventListener("click", () => {
            const toggle = book.isRead()
            if (toggle == "Yes") book.read = "No"
            if (toggle == "No") book.read = "Yes"
            renderLib()
        })

        const likedToggle = document.createElement('button')
        getCard.appendChild(likedToggle)
        likedToggle.classList.add('toggle-liked')
        likedToggle.innerHTML = "Toggle Liked"
        likedToggle.addEventListener("click", () => {
            const toggleTwo = book.isLiked()
            if (toggleTwo == "Yes") book.liked = "No"
            if (toggleTwo == "No") book.liked = "Yes"
            renderLib()
        })

        const deleteToggle = document.createElement('button')
        getCard.appendChild(deleteToggle)
        deleteToggle.classList.add('delete')
        deleteToggle.innerHTML = "&times;"
        deleteToggle.addEventListener("click", () => {
            myLibrary.splice(`${index}`, 1)
            getBody.innerHTML = null
            renderLib()
        })
    })
}

renderLib()