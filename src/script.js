//Book Constructor

function Book(title, author, year){
    this.title  = title
    this.author = author
    this.year  = year
}

let book = new Book('Hereditary Thief', 'Alice Krugger', 1997)

//Library 
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
Library.getFormData = function(){
    const data = document.querySelectorAll('form input[type=text]')
    const book = new Book(data[0],data[1],data[2])
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

//Display data form
btn.addEventListener('click', () =>{
    library.displayForm(form, btn)
} )

//Colect data
form.addEventListener('submit', (event) =>{
    event.preventDefault()

})




