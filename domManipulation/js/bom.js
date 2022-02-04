const input = document.getElementById("favchap");
const button = document.getElementById("subButton");
const list = document.getElementById("list");




button.addEventListener("click", function(){
    newItem = document.createElement("li");
    delButton = document.createElement("button");
    delButton.textContent = "❌";
    delButton.className = "delButton";
    newItem.innerHTML = input.value;
    delButton.addEventListener("click", function(){
        delButton.parentNode.remove(1);
        input.focus();
    });
    newItem.appendChild(delButton);
    list.appendChild(newItem);
    input.value = "";
    input.focus();
});