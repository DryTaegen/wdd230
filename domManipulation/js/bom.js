const input = document.getElementById("favchap");
const button = document.getElementById("subButton");
const list = document.getElementById("list");




button.addEventListener("click", function(){
    let userInput = input.value;
    if (!userInput == "") {
        newItem = document.createElement("li");
        delButton = document.createElement("button");
        delButton.textContent = "❌";
        delButton.className = "delButton";
        newItem.innerHTML = input.value;
        delButton.addEventListener("click", function(){
            delButton.parentNode.remove();
            input.focus();
        });
        newItem.appendChild(delButton);
        list.appendChild(newItem);
        input.value = "";
        input.focus();
    }
});