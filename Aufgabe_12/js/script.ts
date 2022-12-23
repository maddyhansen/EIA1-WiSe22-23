namespace Aufgabe11 {

    /*Blueprint*/
    interface TODO {
        task: string;
        check: boolean;
    }

    /*Array mit obejekten/ Leere Klammern sind dafür da, dass quasi die Todo leer ist. Dann wird quasi alles gespeichert*/
    let intertodo: TODO[] = [];




    var inputDOMElement: HTMLInputElement;
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    var counterDOMElement: HTMLElement;
    var counterdoneDOMElement: HTMLElement;
    var counteropenDOMElement: HTMLElement;


    window.addEventListener("load", function (): void {


        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        counteropenDOMElement = document.querySelector("#counteropen");
        counterdoneDOMElement = document.querySelector("#counterdone");


        addButtonDOMElement.addEventListener("click", addTodo);

        drawListToDOM();
    });

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";
        for (let index: number = 0; index < intertodo.length; index++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML = "<span class='check "+ intertodo[index].check + "'><i class='fas fa-check'></i></span>"
                + intertodo[index].task +
                "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);

            
        }


    }

    function updateCounter(index: number): void {
        counterDOMElement.innerHTML = intertodo.length + " in total"; 
        let i=0
        if (intertodo[index].check == true) counterdoneDOMElement.innerHTML = i++ + "done";
        if (intertodo[index].check == false) counteropenDOMElement.innerHTML = i++ + "open";

}

    function addTodo(): void {
        if (inputDOMElement.value != "") {
            intertodo.unshift({ task: inputDOMElement.value, check: false})
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index: number): void {
        intertodo[index].check = !intertodo[index].check;
        drawListToDOM();
        updateCounter(index);
    }
    function deleteTodo(index: number): void {
        intertodo.splice(index, 1);
        drawListToDOM();
    }
}