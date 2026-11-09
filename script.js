function renderList(items){
    document.querySelector("ul").innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items[i]));
        li.appendChild(document.createElement("button"));

        li.querySelector("button").textContent = "Ta bort";
        li.querySelector("button").onclick = remove;

        li.id = i;

        document.querySelector("ul").appendChild(li);
    }
}

function add(items){
    items.push(document.querySelector("input").value)

    document.querySelector("input").value = "";

    renderList(items);
}

function remove(e){
    e.preventDefault();

    index = parseInt(e.target.id);
    items.splice(index, 1);

    renderList(items);
}


let items = [];

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => add(items));