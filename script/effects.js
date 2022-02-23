// The date.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
document.getElementById("day").innerHTML = date.getDate() + " " + months[date.getMonth()];
document.getElementById("year").innerHTML = date.getFullYear();
var linkNames = ["ho", "co", "al", "ab"];

function sidebar() {
    if (document.getElementById('sidebar').style.width == '80%') {
        document.getElementById('sidebar').style.width = "";
    } else {
        document.getElementById('sidebar').style.width = '80%';
    }
}

function openPage(pageName, linkName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < linkNames.length; i++) {
        document.getElementById(linkNames[i]).style.backgroundColor = "";
        document.getElementById(linkNames[i]).style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    document.getElementById(linkName).style.backgroundColor = "#cc00cc";
    document.getElementById(linkName).style.color = "white";
    document.getElementById('sidebar').style.width = "";
}

document.getElementById("ho").click();