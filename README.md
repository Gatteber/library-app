# library-app
A simple library app to practice Javascript objects.

### Planning out the project ###
Have a display with cards to show library apps
Make some example cards
New book button w/ form
add a "read" button that changes the status from read to unread


### Reflection ###
This project was the first project where I truly, truly got stuck. My old code is still visible on the first branch, and, ironically, despite its complete and utter mesiness, it would have worked. However, when I got to the point of adding the delete functions, the code was so messy and poorly written that I was convinced it was my own problems with writing code that caused the issue.

Strangely enough, I should have scrapped my early design decisions, they caused so much headache that despite my plowing through to just get it done, I really should have scrapped it and done something more simple, like this secondary attempt.

I learned so much in this project. I spent some time studying ES6 and it clearly paid off in my re-write of the code.

Ironically enough, however, the big wall of this project was me forgetting that the splice function needs a second argument to not splice the entire rest of the array. Had I gone to the discord or had someone with js knowledge look through it, I could have solved this issue and saved 10-12 hours of work. However, I actually quite enjoyed learning more about things (there was a lot from the original js course that suddenly began to make sense!). I nearly gave up so many times during this project and wanted to quit, but I decided I was too stubborn to do so, but sometimes, reading really does pay off...

What I'd like to work on in the future:
I really want to find out a cleaner way to render out the DOM. I was hoping to reduce the amount of code I had to write by a lot, and I'm sure that at least 30-40 lines of code could be saved by more elegant structures, and I could've probably kept the functionality of the object functions inside the actual function, instead of doing it inside the event listener, but I only left it that way because it looked cleaner to me (as it was a single case, obviously it should be inside the prototype function in a larger scale project).

I'm curious if I could have used some form of object destructuring to make this easier on myself.

I also really need to try to focus on writing cleaner code and taking advantages of the shorthands for js. I think my previous experience with python, which is always so strict, has made me shy away from some of the cool es6 functionalities.

What I did well:
Honestly, in this project, not much. I'm proud of myself for figuring out the map function (although I kind of cheated and checked a completed project to try to figure out why my delete wasn't working - it was completely unrelated but when I saw a for loop I realized "oh, I could probably map the array, couldn't I?

If you (or someone else) is reading this:
Don't ever give up. Whatever tricks you learn can be really useful, just make sure that you understand and implement whatever you can by yourself to make it easier! The more you practice, the better you will be!!!


### Old Notes ###
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

New plan:
Remake the card system. No inlaid divs with p tags (waste of resources)   DONE
Use a form to submit, and actually get the results from it (you know how to do this)   DONE
on form submit, get the data, run a function call to make parent divs

make a render function to add data


