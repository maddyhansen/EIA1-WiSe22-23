var Aufgabe11;
(function (Aufgabe11) {
    /*Array mit obejekten/ Leere Klammern sind dafür da, dass quasi die Todo leer ist. Dann wird quasi alles gespeichert*/
    let intertodo = [];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var counterdoneDOMElement;
    var counteropenDOMElement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        counteropenDOMElement = document.querySelector("#counteropen");
        counterdoneDOMElement = document.querySelector("#counterdone");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let index = 0; index < intertodo.length; index++) {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + intertodo[index].check + "'><i class='fas fa-check'></i></span>"
                + intertodo[index].task +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        }
    }
    function updateCounter(index) {
        counterDOMElement.innerHTML = intertodo.length + " in total";
        let i = 0;
        if (intertodo[index].check == true)
            counterdoneDOMElement.innerHTML = i++ + "done";
        if (intertodo[index].check == false)
            counteropenDOMElement.innerHTML = i++ + "open";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            intertodo.unshift({ task: inputDOMElement.value, check: false });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        intertodo[index].check = !intertodo[index].check;
        drawListToDOM();
        updateCounter(index);
    }
    function deleteTodo(index) {
        intertodo.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map