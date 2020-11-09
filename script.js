let deleteIdArray =[];
let editIdArray = [];


let listItemsArray = [];
let listItemId = 0;
const taskList = document.querySelector('#task-ul');
const userInput = document.querySelector('#user-input').value;
///////-->>>
///////-- NOTE: NEW CONCEPT
////Adds to page
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
///////-->>>
//-----Add object to array list
document.querySelector('#add-item').addEventListener("click", function(event){
    if(listItemsArray.length >= 0){
        listItemsArray.push(////Update list with Item
            {
                name: userInput,////keep an eye on this
                id: listItemId,
                done: false,
                trash: false
            });

            console.log('list item works');
            console.log(listItemsArray);
            console.log(listItemId);
            ////--Add Item to page list
        }
        addToPage (userInput);
        // userInput.value = "";
        listItemId ++;
    localStorage.setItem('MyToDoList', JSON.stringify(listItemsArray));
});
////Default to prevent reload after get user name
document.querySelector('#add-item').addEventListener("click", function(event){
    event.preventDefault()
});



////-----Delete Item



////-----Reset list
document.querySelector('#delete-list').addEventListener("click", function(event){
    listItemsArray = [];////Deletes objects and resets array to empty
    console.log('it deletes list');
    console.log(listItemsArray)
});
////Default to prevent reload after list reset
document.querySelector('#delete-list').addEventListener("click", function(event){
    event.preventDefault()
});



////Check Off Item


