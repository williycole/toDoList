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
// let editIdArray = [];
// let deleteItem = 0;
// let deleteItem = [];




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
    <div class="task-finished">
    <i class="far fa-check-square icon"></i>
    </div>

    <p class="task icon">${userInput}</p>

    <div class="edit-task">
    <i class="fas fa-edit icon"></i>
    </div>

    <div class="delete-task">
    <i class="far fa-trash-alt delete-task icon" onclick="removeItemFromPage()"></i>
    </div>
    </li>`
    const position = "beforeend";
    taskList.insertAdjacentHTML(position, taskLi);
}
/***=======================
 ***03. Delete Single Item
  --
  --uses preventDefault
=======================***/

// function removeItemFromPage(userInput) {

// }

/***=======================
 ***04. Remove li from page, and reset array list
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
                // delete: deleteItem,
                done: false,
                trash: false
            });

            // console.log('list item works');
            console.log(userInput);
            console.log(listItemsArray);

            // console.log(deleteItem);
            console.log(listItemId);
            ////--Add Item to page list
            addToPage (userInput);
        }
        userInput.value = "";
        listItemId ++;
        // deleteItem ++;
        // localStorage.setItem('wishlistItems', wishlist.innerHTML);
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


