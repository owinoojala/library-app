//Book Constructor

function Book(title, author, year){
    this.title  = title
    this.author = author
    this.year  = year
}

let book = new Book('Hereditary Thief', 'Alice Krugger', 1997)


function Library(){
    this.bookList = []

}
Library.prototype.getBooks = function(){
    return this.bookList
}
Library.prototype.displayForm = function(form, btn){
    form.classList.remove('hidden')
    form.classList.add('form-center')
    btn.classList.add('hidden')    
}

Library.prototype.getBook = function(title, author, year){
    const book = new Book(title, author, year)
    return book
}
Library.prototype.updateList = function(book){
    this.bookList.push(book)
}
Library.prototype.hideForm = function(form, btn){
    form.classList.remove('.form-center')
    form.classList.add('hidden')
    btn.classList.add('hidden')
}



const library = new Library()
const btn = document.querySelector('button')
const form = document.querySelector('form')
btn.addEventListener('click', () =>{
    library.displayForm(form, btn)
} )
library.updateList(book)
library.updateList(book)
library.updateList(book)
library.updateList(book)
library.updateList(book)

const books = library.getBooks()
let count = 1
books.forEach(book => {
    console.log(`${book.title}: ${count}: book.author`)
    count++
    
});

