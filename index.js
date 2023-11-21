let listContainer = document.getElementById('list-container')
let inputBox = document.getElementById('input-box');
const addCommentMsg = document.querySelector(".add-comment-msg");
const deleteCommentMsg = document.querySelector(".delete-comment-msg");
function addTask(e) {
    if (inputBox.value === "") {
        alert("Add Your Task")
    }
    else {
        let task = document.createElement('li')
        task.textContent = inputBox.value
        // listContainer = inputBox.value
        listContainer.appendChild(task);
        let span = document.createElement('span')
        span.textContent = '\u00d7'
        task.appendChild(span)
    sucessMessage();
    }
    

    inputBox.value = '';
    saveData()
}

function sucessMessage() {
    if (!inputBox.value) return;
  addCommentMsg.classList.add("show-message")

  setTimeout(setTime, 1000);

}

function setTime() {
    addCommentMsg.classList.remove("show-message")
  }

  function deletedSucessMessage(){
    deleteCommentMsg.classList.add("show-message")
    
      setTimeout(sett, 800);
    }
    function sett() {
      deleteCommentMsg.classList.remove("show-message")
    }

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
    //events
    // btn.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     sucessMessage();
    //     callValue();
    //     input.value = "";
    //   });

    //   ///sucess message
    //   function sucessMessage() {
    //     if (!input.value) return;
    //     addCommentMsg.classList.add("show-message")

    //     setTimeout(setTime, 1000);
    //   }
    //   function setTime() {
    //     addCommentMsg.classList.remove("show-message")
    //   }
})
listContainer.addEventListener('click', (el) => {
    if (el.target.tagName == 'LI') {
        el.target.classList.toggle('checked')
        saveData()
    }
    else if (el.target.tagName == 'SPAN') {
        el.target.parentElement.remove()
        deletedSucessMessage()
        saveData()
    }
})
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('tasks')
}
showData()