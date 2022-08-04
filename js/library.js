console.log("This is Vipin");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view
// constroctor
function Book (name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;

}

function Display() {
    
}
// adding prototype add, clear, validate, show in Display constoctor
Display.prototype.add = function(book){
      tableBody = document.getElementById("tableBody");
      let uiString = `
                  <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`;
        tableBody.innerHTML += uiString;

}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
     if(book.name.length <2 || book.author.length <2){
         return false;
     }
     else{
         return true;
     }
}

Display.prototype.show = function(type, displayMessage){
     let message = document.getElementById("message");
     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
            setTimeout(function() {
                message.innerHTML = ''
            }, 3000);
}

// adding an event listener 
let libraryForm = document.getElementById("libraryForm");
  libraryForm.addEventListener('submit', libraryFormSubmit);

  function libraryFormSubmit(event) {

     

    //   console.log('submit');
      let name = document.getElementById("bookName").value;
      let author = document.getElementById('author').value;
      let type ;

      let fiction = document.getElementById("Fiction");
      let programming = document.getElementById('Programming');
      let cooking = document.getElementById('Cooking');
//  puting chackbox value in type 
      if(fiction.checked){
          type = fiction.value;
      }
      else if (programming.checked){
          type = programming.value;
      }
      else if(cooking.checked){
          type = cooking.value;
      }

//  adding book anme and display it by constroctor  

  let book = new Book (name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)){
      display.add(book);
      display.clear();
      display.show("success", 'Your book has been successfully added')
  }else{
      display.show('danger' , 'sorry you cannot add this book')
  }

 let lsBook = localStorage.getItem('booksls');
if(lsBook==null){
    booksObj = []
}
else{
    booksObj = JSON.parse(lsBook);
}
booksObj.push(book);

localStorage.setItem('booksls', JSON.stringify(booksObj));

// for removing default action like clearing form automaticaly 
  event.preventDefault();
}
function showBooks(){
    let lsBook = localStorage.getItem('booksls');
if(lsBook==null){
    booksObj = []
}
else{
    booksObj = JSON.parse(lsBook);
}


}