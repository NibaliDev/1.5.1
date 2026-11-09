function toggleSelect(e){

    if (selectedItems.includes(e.target.id)) {
        selectedItems.splice(selectedItems[e.target.id], 1);
        e.target.classList.remove("selected");
    }
    else {
        e.target.classList.toggle("selected");
        selectedItems.push(e.target.id);
    }

    if (selectedItems.length === 0) {
        document.getElementById("rmBtn").style.display = "none";
    }
    else {
        document.getElementById("rmBtn").style.display = "block";
    }
}

function renderList(items){
    document.querySelector("ul").innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createElement("span"));
        li.appendChild(document.createElement("button"));

        li.querySelector("button").textContent = "Ta bort";
        li.querySelector("button").onclick = remove;

        li.querySelector("span").textContent = items[i];

        li.onclick = toggleSelect;
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

function removeSelected(items){
    for (let i = selectedItems.length - 1; i >= 0; i--) {
        items.splice(selectedItems[i], 1);
    }

    alert(selectedItems);

    renderList(items)
}


let items = [];
let selectedItems = [];

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => add(items));

let rmBtn = document.getElementById("rmBtn");
rmBtn.addEventListener("click", () => removeSelected(items));
