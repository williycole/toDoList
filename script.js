////======Program Features & Table of Contents=====
/*****
********
**** 01. Gen Varialbes for Program & local storage load
**** 02. Add HTML li to page
**** 03. Remove li from page, and reset array list
**** 04. Add object to array list and push to page
**** 05. Delete Single Item
**** 06. Check Off Item
**** 07. Rename Item
********
******/

/***=======================
 ***01. Gen Varialbes for Program & local storage load
=======================***/
let deleteIdArray =[];
let editIdArray = [];


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
    const taskLi = `<li class="item-cntr">
    <button class="task-finished">
    <i class="far fa-check-square icon"></i>
    </button>

    <p class="task icon">${userInput}</p>

    <button class="edit-task">
    <i class="fas fa-edit icon"></i>
    </button>

    <button class="delete-task">
    <i class="far fa-trash-alt delete-task icon"></i>
    </button>
    </li>`
    const position = "beforeend";
    taskList.insertAdjacentHTML(position, taskLi);
}

/***=======================
 ***03. Remove li from page, and reset array list
 --removes local storage
=======================***/
document.querySelector('#delete-list').addEventListener("click", function(event){
    listItemsArray = [];////Empties Array
    taskList.innerHTML = '';//// Removes li from html
    localStorage.clear();

    console.log('it deletes list');
    console.log(listItemsArray)
});

/***=======================
 ***04. Add object to array list and push to page
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
                done: false,
                trash: false
            });

            console.log('list item works');
            console.log(userInput);
            console.log(listItemsArray);
            console.log(listItemId);
            ////--Add Item to page list
            addToPage (userInput);
        }
        userInput.value = "";
        listItemId ++;
        // localStorage.setItem('wishlistItems', wishlist.innerHTML);
        localStorage.setItem('savedToDoList', taskList.innerHTML);
    });
////Default to prevent reload after get user name
document.querySelector('#add-item').addEventListener("click", function(event){
    event.preventDefault()
});

/***=======================
 ***05. Delete Single Item
  --
  --uses preventDefault
=======================***/


////Default to prevent reload after list reset
document.querySelector('#delete-list').addEventListener("click", function(event){
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


