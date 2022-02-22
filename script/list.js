// Read data from localStorage.
var arrList = JSON.parse(localStorage.getItem("arrList")) || [];
// The number of remaining tasks.
var tasks = arrList.length;
for (var i = 0; i < tasks; i++) {
    var li = document.createElement("li");
    var inputValue = arrList[i];
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue !== '') {
        document.getElementById("myUL").appendChild(li);
    }
}

function update() {
    if (tasks == 0) {
        document.getElementById("head2").innerHTML = "&emsp;No task remaining!";
    } else if (tasks == 1) {
        document.getElementById("head2").innerHTML = "&emsp;1 task to do";
    } else {
        document.getElementById("head2").innerHTML = "&emsp;" + tasks + " tasks to do";
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
                    localStorage.setItem("arrList", JSON.stringify(arrList));
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