////======Program Features & Table of Contents=====
/*****
********
**** 01. Gen Varialbes for Program & local storage load
**** 02. Add HTML li to page
**** 03. Delete Single Item
**** 04. Remove li from page, and reset array list
**** 05. Add object to array list and push to page
**** 06. Check Off Item
**** 07. Rename Item
********
******/

/***=======================
 ***01. Gen Varialbes for Program & local storage load
=======================***/
let listItemsArray = [];
let listItemId = 0;

const taskList = document.querySelector('#task-ul');
// Check for saved list items
let savedData = localStorage.getItem('savedToDoList');
// If there are any saved items, update  list
if (savedData) {
	taskList.innerHTML = savedData;
}

/***=======================
 ***02. Add HTML li to page
 ///////-- NOTE: NEW CONCEPT
=======================***/
function addToPage (userInput){
    const taskLi = `<li class="item-cntr" >
                        <i class="doneBtn far fa-check-square icon"></i>
                        <p class="task icon">${userInput}</p>
                        <i class="editBtn fas fa-edit icon"></i>
                        <i class="trashBtn far fa-trash-alt  icon">
                    </li>`
    const position = "beforeend";
    taskList.insertAdjacentHTML(position, taskLi);
}
/***=======================
 ***03. Delete Single Item
 ///////-- NOTE: NEW CONCEPT
  --uses preventDefault
=======================***/
taskList.addEventListener('click', deleteCheck);
function deleteCheck(e){
    const item = e.target;
    console.log(e.target);
    ////Deletes Items
    if(item.classList[0] === "trashBtn"){
        const trashCheckIt = item.parentElement;
        trashCheckIt.remove();
        localStorage.setItem('savedToDoList', taskList.innerHTML);
    }

    ////Checks Off Items
    if(item.classList[0] === "doneBtn"){
        const trashCheckIt = item.parentElement;
        trashCheckIt.classList.toggle('finished-task');
        localStorage.setItem('savedToDoList', taskList.innerHTML);
    }
}

/***=======================
 ***04. Remove li from page, and reset array listE
 --removes local storage
=======================***/
document.querySelector('#delete-list').addEventListener("click", function(event){
    listItemsArray = [];////Empties Array
    taskList.innerHTML = '';//// Removes li from html
    localStorage.clear();
    // console.log('it deletes list');
    // console.log(listItemsArray)
});

/***=======================
 ***05. Add object to array list and push to page
  --relies on 01. and 02.
  --uses preventDefault
  --saves to local storage
=======================***/
    document.querySelector('#add-item').addEventListener("click", function(event){
        ////get user input on click
        const userInput = document.querySelector('#user-input').value;
    if(listItemsArray.length >= 0){
        listItemsArray.push(////Update list with Item
            {
                name: userInput,////keep an eye on this
                id: listItemId,
                deleteItem: false,
                editItem: false
            });
            addToPage (userInput);////--Add Item to page list
        }
        userInput.value = "";
        listItemId ++;
        deleteItemArray.push({
            id: deleteItemId
        });
        deleteItemId ++;
        console.log(deleteItemArray),  console.log(listItemsArray),  console.log(deleteItemId);
        localStorage.setItem('savedToDoList', taskList.innerHTML);
    });
////Default to prevent reload after get user name
document.querySelector('#add-item').addEventListener("click", function(event){
    event.preventDefault()
});


/***=======================
 ***06. Check Off Item
  --
  --uses preventDefault
=======================***/



/***=======================
 ***07. Rename Item
  --
  --uses preventDefault
=======================***/


