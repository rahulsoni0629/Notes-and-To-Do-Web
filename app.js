let input = document.getElementsByClassName("input-box")[0];
let taskbtn = document.getElementsByClassName("task-btn")[0];
let ul = document.getElementsByClassName("ul")[0];

taskbtn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("del-btn");

    item.appendChild(delBtn);
    ul.appendChild(item);

    // Clear the input after adding the task
    input.value = "";
    input.select();
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        
    }
});


let ntbtn = document.getElementsByClassName("new-btn");
let ntbox = document.getElementsByClassName("note-box");
let notesContainer = document.getElementsByClassName("notes-continaer")[0];

function createNote(event) {
    let newNote = document.createElement("textarea");
    newNote.classList.add("note-box");
    newNote.placeholder = "Enter your note here...";   
    notesContainer.appendChild(newNote);
}


ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

function deleteNote() {
    let notesContainer = document.getElementsByClassName("notes-continaer")[0];
    let textareas = notesContainer.getElementsByClassName("note-box");

    if (textareas.length > 0) {

        notesContainer.removeChild(textareas[textareas.length - 1]);
    }
}




