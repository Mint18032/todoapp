// Read data from localStorage.
var arrList = JSON.parse(localStorage.getItem("arrList")) || [];
var completedList = JSON.parse(localStorage.getItem("completed")) || [];
// The number of remaining tasks.
var tasks = arrList.length;
function createList(id, mylist) {
    for (var i = 0; i < mylist.length; i++) {
        var li = document.createElement("li");
        var inputValue = mylist[i];
        if (inputValue !== '') {
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById(id).appendChild(li);
        }
    }
}
(createList)("myUL", arrList);
(createList)("myUL2", arrList);
(createList)("myUL3", completedList);

function update() {
    if (tasks == 0) {
        document.getElementById("head2").innerHTML = "&emsp;No task remaining!";
    } else if (tasks == 1) {
        document.getElementById("head2").innerHTML = "&emsp;1 task to do";
    } else {
        document.getElementById("head2").innerHTML = "&emsp;" + tasks + " tasks to do";
    }
    let total = tasks + completedList.length;
    if (total !== 0) {
        let d = completedList.length / total;
        document.getElementById('done').style.width = (d * 100) + '%';
        document.getElementById('done').innerHTML = (d * 100).toFixed(0) + '%';
    } else {
        document.getElementById('done').style.width = 0;
        document.getElementById('done').innerHTML = '';
    }
}
(update)();

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

function updateUL() {
    let myUL2 = document.getElementById('myUL2');
    while (myUL2.firstChild) {
        myUL2.removeChild(myUL2.firstChild);
    }
    createList("myUL2", arrList);
    let myUL3 = document.getElementById('myUL3');
    while (myUL3.firstChild) {
        myUL3.removeChild(myUL3.firstChild);
    }
    createList("myUL3", completedList);
}

// Click on a close button to hide the current list item and remove it from localStorage.
var close = document.getElementsByClassName("close");
function setCloseBtn() {
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            // Remove from localStorage
            var text = div.innerText.substring(0, div.innerText.length - 1);
            alert("\"" + text + "\" is removed from your to do list!");
            for (let j = 0; j < tasks; j++) {
                if (text == arrList[j]) {
                    arrList.splice(j, 1); // Remove from arrList.
                    completedList.push(text);
                    localStorage.setItem("arrList", JSON.stringify(arrList));
                    localStorage.setItem("completed", JSON.stringify(completedList));
                    updateUL();
                    break;
                }
            }
            tasks--;
            update();
        }
    }
}
(setCloseBtn)();

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        // Add new item to localStorage
        arrList.push(inputValue);
        localStorage.setItem("arrList", JSON.stringify(arrList));
        // Update
        tasks++;
        update();
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    setCloseBtn();
}

function newElementL() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInputL").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        // Add new item to localStorage
        arrList.push(inputValue);
        localStorage.setItem("arrList", JSON.stringify(arrList));
        // Update
        tasks++;
        update();
    }
    document.getElementById("myInputL").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    setCloseBtn();
}