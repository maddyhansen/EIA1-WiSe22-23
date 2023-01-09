namespace Aufgabe11 {
    declare var Artyom: any;

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
    var counterDOMElement: HTMLParagraphElement;
    var counterdoneDOMElement: HTMLElement;
    var counteropenDOMElement: HTMLElement;

    var counterTotal: number = 0;
    var counterClosed: number = 0;
    var counterOpen: number = 0;


    window.addEventListener("load", function (): void {


        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = <HTMLParagraphElement>document.getElementById("counter");
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

            todo.innerHTML = "<span class='check " + intertodo[index].check + "'><i class='fas fa-check'></i></span>"
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

    function updateCounter(index?: number): void {           //? macht optional ob ich Zahl beim Aufruf des Counters eintrage. bsp: updatecounter()
        console.log(intertodo);
        if (index || index == 0) {                           // Bedeutet "oder": wenn index ODER index == 0 ist, dann erfüllt er die if Bedingung
            if (intertodo[index].check == true) counterClosed--;
            if (intertodo[index].check == false) counterOpen--;
        }
        counterDOMElement.innerHTML = counterTotal + " in total";
        counterdoneDOMElement.innerHTML = counterClosed + " open";
        counteropenDOMElement.innerHTML = counterOpen + " done";




    }

    function addTodo(): void {
        if (inputDOMElement.value != "") {
            intertodo.unshift({ task: inputDOMElement.value, check: false })
            inputDOMElement.value = "";
            drawListToDOM();
            counterTotal++;
            counterOpen++;
            updateCounter()
        }
    }
    function toggleCheckState(index: number): void {
        intertodo[index].check = !intertodo[index].check;
        drawListToDOM();
        counterClosed++;
        counterOpen--;
        updateCounter();
    }
    function deleteTodo(index: number): void {
        counterTotal--;
        console.log(index);
        updateCounter(index)
        intertodo.splice(index, 1);
        drawListToDOM();

    }
}