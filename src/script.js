//Book Constructor

function Book(title, author, year){
    this.title  = title
    this.author = author
    this.year  = year
}



//Library 
function Library(){
    this.bookList = []

}
Library.prototype.getBooks = function(){
    return this.bookList
}
Library.prototype.closeForm = function(form, btn){
    form.classList.add('hidden')
    btn.classList.remove('hidden') 
}
Library.prototype.displayBook = function(book){
    //get tbody
    const tboby = document.querySelector('tbody')
   
    //Create row
    const tableRow = document.createElement('tr')

    //Create td for title
    const td = document.createElement('td')
    td.className = 'py-2 px-2 capitalize'
    td.textContent = book.title
    tableRow.appendChild(td)

    //Create td for author
    const td1 = document.createElement('td')
    td1.textContent = book.author
    td1.className = 'py-2 px-2 capitalize'
    tableRow.appendChild(td1)

    //Create td for year
    const td2 = document.createElement('td')
    td2.className = 'py-2 px-2 capitalize'
    td2.textContent = book.year
    tableRow.appendChild(td2)

    //Append row to table body
    tboby.appendChild(tableRow)   
}
Library.prototype.displayForm = function(form, btn){
    form.classList.remove('hidden')
    form.classList.add('form-center')
    btn.classList.add('hidden')    
}
Library.prototype.getFormData = function(data){
    const book = new Book(data[0].value,data[1].value,data[2].value)
    return book
}

Library.prototype.updateList = function(book){
    this.bookList.push(book)
}
Library.prototype.hideForm = function(form, btn){
    form.classList.remove('.form-center')
    form.classList.add('hidden')
    btn.style.display='none'
}




const main = () =>{
    const library = new Library()
    const btn = document.querySelector('#add-btn')
    const forms = document.querySelectorAll('form')
    const absoluteForm = document.querySelector('form.absolute')
    const closeBtn = document.querySelector('#close-btn')

    //Display data form
    btn.addEventListener('click', () =>{
        library.displayForm(absoluteForm, btn)
    } )

    //Colect data
    forms.forEach(form => {
        let data = []
        form.addEventListener('submit', (event) =>{
        event.preventDefault()
        if(form.id === 'form-1'){
            data = document.querySelectorAll('#form-1 input[type=text]')
        }else{
            data = document.querySelectorAll('#form-2 input[type=text]') 
        }
        const book = library.getFormData(data)
        library.updateList(book)
        console.log(book)
        form.reset()
        library.displayBook(book)
        });
    })

    closeBtn.addEventListener('click', () =>{
       library.closeForm(absoluteForm, btn)
    })
}
main()




