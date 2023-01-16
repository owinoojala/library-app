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
    this.createRow(tableRow,book.title)
    
    //Create td for author
    this.createRow(tableRow,book.author)

    //Create td for year
    this.createRow(tableRow,book.year)

    //Append row to table body
    tboby.appendChild(tableRow)   
}
Library.prototype.displayForm = function(form, btn){
    form.classList.remove('hidden')
    form.classList.add('form-center')
    btn.classList.add('hidden')    
}
Library.prototype.filter = function(text){
    const regex= new RegExp(text)
    //Get td elements
    const tds = document.querySelectorAll('td')
    tds.forEach(td =>{
        if(regex.test(td.textContent)){
            td.style.color = 'green'
        }else{
            td.parentElement.style.color = 'red'
        }
    })
}
Library.prototype.getFormData = function(data){
    const book = new Book(data[0].value,data[1].value,data[2].value)
    return book
}
Library.prototype.createRow = function(tableRow, data) {
    const td = document.createElement('td')
    td.className = 'py-2 px-2 capitalize'
    td.textContent = data
    tableRow.appendChild(td)
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
    const seachbar = document.querySelector('#search-bar')


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

    //Close form
    closeBtn.addEventListener('click', () =>{
       library.closeForm(absoluteForm, btn)
    })

    //Filter data
    seachbar.addEventListener('input', () =>{
        library.filter(seachbar.value)
    })
}
main()




