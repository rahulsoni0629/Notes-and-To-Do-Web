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
    // Create a new textarea element
    let newNote = document.createElement("textarea");
    newNote.classList.add("note-box");
    newNote.placeholder = "Enter your note here...";

    // Append the new textarea to the notes-container
    
    notesContainer.appendChild(newNote);
}




// delete button

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// New function for deleting textareas
function deleteNote() {
    let notesContainer = document.getElementsByClassName("notes-continaer")[0];
    let textareas = notesContainer.getElementsByClassName("note-box");

    // Check if there are textareas to delete
    if (textareas.length > 0) {
        // Remove the last textarea (you can modify this logic based on your requirements)
        notesContainer.removeChild(textareas[textareas.length - 1]);
    }
}




