function add(items){
    items.push(document.querySelector("input").value)

    document.querySelector("ul").innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        document.querySelector("ul").appendChild(li);
    }
}

let items = [];

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => add(items));