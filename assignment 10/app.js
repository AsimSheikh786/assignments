var list = document.getElementById('list');

function addTodo(){
    var todoItem = document.getElementById('todoItem');
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    list.appendChild(li);
    todoItem.value = "";


    var span = document.createElement('span');




    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    editBtn.appendChild(editText);
    span.appendChild(editBtn);
    li.appendChild(span);
    editBtn.setAttribute("onclick", "editItem(this)");



    var delBtn = document.createElement('button');
    var delText = document.createTextNode('DELETE');
    delBtn.appendChild(delText);
    span.appendChild(delBtn);
    li.appendChild(span)
    delBtn.setAttribute("onclick", "deleteItem(this)");
    // delBtn.setAttribute("class", "");
    
}

function deleteItem(e){
    e.parentNode.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var val = prompt('Enter updated value', e.parentNode.parentNode.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.nodeValue = val;
}







var dayMode = document.getElementById("day");
var nightMode = document.getElementById("night")
var body = document.getElementById("body");
var main = document.getElementById("main");

function changeMode(){
    dayMode.className = "offMode";
    nightMode.className = "onMode"
    body.className = "body2";
    main.className = "main2";
}

function changeMode2(){
    dayMode.className = "onMode";
    nightMode.className = "offMode"
    body.className = "body"
    main.className = "main";
}