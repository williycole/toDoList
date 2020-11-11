////======Program Features & Table of Contents=====
/*****
********
**** 01. Gen Varialbes for Program & local storage load
**** 02. Add HTML li to page
**** 03. Delete/local storge handlers & check off li item
**** 04. Rename Item
**** 05. Remove ul from page, and reset array list
**** 06. Add object to array list and push to page
********
******/


/***=======================
 ***01. Gen Varialbes for Program & local storage load
=======================***/
let listItemsArray = [];
let listItemId = 0;
const taskList = document.querySelector('#task-ul');

let savedData = localStorage.getItem('savedToDoList');//// Check for saved list items
if (savedData) {//// If there are any saved items, update  list
	taskList.innerHTML = savedData;
}


/***=======================
 ***02. Add HTML li to page
 ///////-- NOTE: NEW CONCEPT
=======================***/
function addToPage (userInput){
    const taskLi = `<li class="item-cntr" >
                        <p class="task icon">${userInput}</p>
                        <i class="doneBtn far fa-check-square icon"></i>
                        <i class="editBtn fas fa-edit icon"></i>
                        <i class="trashBtn far fa-trash-alt  icon">
                    </li>`
    const position = "beforeend";
    taskList.insertAdjacentHTML(position, taskLi);
}


/***=======================
 ***03. Delete/local storge handlers & check off li item
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
        trashCheckIt.classList.add("dipOut")
        ////trashCheckIt.remove()
        ////Arrow function to delay remove and update local storage
          setTimeout(delayDelete = () => {
              trashCheckIt.remove()
              ////Deletes html from local storage
              localStorage.setItem('savedToDoList', taskList.innerHTML);
            }, 600);
        }
    ////Checks Off Items
    if(item.classList[0] === "doneBtn"){
        const trashCheckIt = item.parentElement;
        trashCheckIt.classList.toggle('finished-task');
        ////Updates html check off to local storage
        localStorage.setItem('savedToDoList', taskList.innerHTML);
    }
}


/***=======================
 ***04. Remove ul from page, and reset array list
 --removes local storage
=======================***/
document.querySelector('#delete-list').addEventListener("click", function(event){
    listItemsArray = [];////Empties Array
    taskList.innerHTML = '';//// Removes li from html
    localStorage.clear();
});


/***=======================
 ***05. Rename Item
  --
  --uses preventDefault
=======================***/
// taskList.addEventListener('click', deleteCheck);
// function deleteCheck(e){
//     const item = e.target;
//     console.log(e.target);
//     ////Deletes Items
//     if(item.classList[0] === "trashBtn"){
//         const trashCheckIt = item.parentElement;
//         trashCheckIt.classList.add("dipOut")
//         ////trashCheckIt.remove()
//         ////Arrow function to delay remove and update local storage
//           setTimeout(delayDelete = () => {
//               trashCheckIt.remove()
//               ////Deletes html from local storage
//               localStorage.setItem('savedToDoList', taskList.innerHTML);
//             }, 600);
//         }
//     ////Checks Off Items
//     if(item.classList[0] === "doneBtn"){
//         const trashCheckIt = item.parentElement;
//         trashCheckIt.classList.toggle('finished-task');
//         ////Updates html check off to local storage
//         localStorage.setItem('savedToDoList', taskList.innerHTML);
//     }
// }
// console.log(`localStorage.listItemsArray----${localStorage.listItemsArray}`);
//// console.log(`listItemsArray----${listItemsArray}`);


/***=======================
 ***06. Add object to array list and push to page
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
                name: userInput,
                id: listItemId,
                deleteItem: false,
                editItem: false
            });
            addToPage (userInput);////--Add Item to page list
            console.log(`list item id----${listItemId}`)
        }
        userInput.value = "";
        listItemId ++;
        ////----------------------------------Local Storage Code
        ////Saves New List item HTML to local storage
        localStorage.setItem('savedToDoList', taskList.innerHTML);
        ////Saves object to local Storage as string then changes back to object
        let listItemsArray_localString = JSON.stringify(listItemsArray);
        localStorage.setItem("listItemsArray", listItemsArray_localString);

        /////code for future updates/testing
        // console.log(`string----${listItemsArray_localString}`);
        // let listItemsArray_localObject = JSON.parse(localStorage.getItem(listItemsArray));
        //         console.log(`object----${listItemsArray_localObject}`);
        ////----------------------------------------------------
    });
////Default to prevent reload after get user name
document.querySelector('#add-item').addEventListener("click", function(event){
    event.preventDefault()
});

