function toggleSelect(e){
    e.preventDefault();

    if (selectedItems.includes(e.target.id)) {
        selectedItems.pop(e.target.id);
    }
    else {
        selectedItems.push(e.target.id);
    }

    renderList();
}

function save(){
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
}

function load(){
    items = JSON.parse(localStorage.getItem("items")) || [];
    selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];


    if (selectedItems.length === 0) {
        document.getElementById("rmBtn").style.display = "none";
    }
    else {
        document.getElementById("rmBtn").style.display = "block";
    }

    renderList();
}


function renderList(){
    document.querySelector("ul").innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createElement("span"));
        li.appendChild(document.createElement("button"));

        li.querySelector("button").textContent = "Ta bort";
        li.querySelector("button").onclick = remove;

        li.querySelector("span").textContent = items[i];

        li.addEventListener("click", toggleSelect);
        li.id = items[i][0];

        document.querySelector("ul").appendChild(li);

        if (selectedItems.includes(li.id)) {
            li.classList.add("selected");
        }
        else if (li.classList.contains("selected")) {
            li.classList.remove("selected");   
        }
    }

    if (selectedItems.length === 0) {
        document.getElementById("rmBtn").style.display = "none";
    }
    else {
        document.getElementById("rmBtn").style.display = "block";
    }

    save()
}

function add(){
    let id = Date.now().toString(36);

    items.push([id, document.querySelector("input").value]);
    document.querySelector("input").value = "";

    renderList();
}

function remove(e){
    e.preventDefault();
    e.stopPropagation();

    items.pop(e.target.parentElement.id);

    if (selectedItems.includes(e.target.parentElement.id)) {
        selectedItems.pop(e.target.parentElement.id);
    } 

    renderList();
}

function removeSelected(){
    for (let i = selectedItems.length - 1; i >= 0; i--) {
        items.splice(selectedItems[i], 1);
        selectedItems.splice(i, 1);
    }

    renderList();
}



let items = [];
let selectedItems = [];
load();
renderList(items);

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => add(items));

let rmBtn = document.getElementById("rmBtn");
rmBtn.addEventListener("click", () => removeSelected(items));
