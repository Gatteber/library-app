# library-app
A simple library app to practice Javascript objects.

### Planning out the project ###
Have a display with cards to show library apps
Make some example cards
New book button w/ form
add a "read" button that changes the status from read to unread



append the first card child
loop through and make title box, user box, and bottom box.
append final children to each box
^^ kind of works


first loop ok
second loop we need a unique selector
idea -> go through the object position?? and add an id
how do we loop that though?

form:
id = user-title Book Title: Harry Potter
Book Author: JK Rowling
Page Count: 350 (0 if unknown)
Have you read this book? dropdown???
Did you like this book? dropdown???



Add your book!
addBookToLibrary() {
    const title = user-title
    const author = user-author
    const page
    const read
    const like
    const myNewBook = new Book (title, author, page, read, like)
    myLibrary.push(myNewBook)
    console.log(myLibrary[0].title);
}
closeModal()


book submission done
constructor done
form clearing done

loop array to add items  done
wire up read/liked
add clear functionality

create the element
<!-- element.isDisplayed = false (add this to the object!) -->

create function (when form submitted)

select card-body
for i=0, i <array.length i++ 
if element.isDisplayed return
create stuff
append stuff
document.isdisplayed = true

card1234qwerpppp

card1qp
2wp
3ep
4rp

 add classlist, add attribute, add content


function delete (title) {
    mylibrary[title].delete


}
delete button [id = title]
delete button add event listener ("click", () => {
    document.getElementbyID(title)
    const includesBook = myLibrary.includes(title)
    delete(title)
})

just re-render the entire thing lmao
add a new item -> re-render 

get the id of the parent and delete it? why cant you do this with the variable from the loop?