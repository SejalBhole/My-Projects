let todoList = [
    {item: 'NPTEL Assignment', dueDate : '9/09/2024'} ,
    {item : 'Research Paper', dueDate : '10/09/2024'},
    {item:'Web Development',dueDate:'11/09/2024'},
    ];
displayItems();

function addToDo(){
let inputElement = document.querySelector('#text');
let dateElement = document.querySelector('#todo-date');
let todoItem = inputElement.value;
let todoDate = dateElement.value;

todoList.push({item:todoItem, dueDate:todoDate});
inputElement.value = '';        //making textbox empty after insertion
dateElement.value = '';
displayItems();
}
    

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newhtml = ''; 

    for(let i =0; i<todoList.length; i++){ 
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let{item,dueDate} = todoList[i];
        newhtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>            
    <button class="button-del" 
    onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    `;                             //we want delete button near list item thats why use span.
    }
    containerElement.innerHTML = newhtml;
        
} 