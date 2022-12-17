namespace Aufgabe10{

/*functions I need for the counter*/
let number: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("number") /*function that defines what number is*/
let numberUp = document.querySelector('value');
let numberDown = document.querySelector('Delete');
let counter = 0; /*function that defines that the counter starts with 0*/


/*Task-Space and delete buttton*/
let value = (document.getElementById("new-task-submit") as HTMLInputElement); /*function that defines what value is*/

/*The EventListener just loads the task field and the add button. So you will just see the title, button and test field as soon as you open the page/webapp*/
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    
    const input = document.querySelector("#new-task-input") as HTMLInputElement; /*What is the HTML input element? The <input> element is most commonly used for collecting and retrieving user data from a web form. It's where users enter their data. It's nested inside the <form> element and it's a self closing element. This means it does not require a closing tag.*/
    const taskOrder = document.querySelector("#tasksOrder");

    const list_el = document.querySelector("#tasks");

/*The EventListener adds the task to the list*/
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        /* This part is for the counter. So if you click on add the number goes up*/
        counter++;
        console.log(counter);
        number.innerHTML = "" + counter;
        const task = input.value;

        if (!task){
            alert("Please, first add a new task!"); /*This pops up if you leave the task field empty and push the button Add*/
            return; /*This one let us just return to the formal side, so we can try to add our task again.*/
        }

        /*This part is for the checkbox*/

        const checkBoxDiv: HTMLDivElement = document.createElement("div")
        list_el.appendChild(checkBoxDiv)

        const checkbox: HTMLInputElement = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        checkBoxDiv.appendChild(checkbox)

        /*This part here is imprtant for the <form> we made to add a to do*/
        const task_el = document.createElement("div");
        list_el.appendChild(task_el);
        task_el.classList.add("task");
        
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type = ("text");
        task_input_el.value = task; 
        task_input_el.setAttribute("readonly", "readonly"); 

        task_content_el.appendChild(task_input_el);

       /* I added now the button for delete in the taskfield I create*/
        const task_actions_el = document.createElement("div"); 
        task_actions_el.classList.add("actions");
        
        const task_delete_el = document.createElement("button"); /*tas delete element is equal to button*/
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_delete_el)
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value="";

        /*To delete a task I made an eventlistener. If you klick the button it will remove "child". So the child is basically a task that I delete.*/
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            counter--; /*If you delete one task the counter will go down.*/
            number.innerHTML = "" + counter; /*It is important to link into the innerhtml to change the number!*/
            
        });

    });
})


}

