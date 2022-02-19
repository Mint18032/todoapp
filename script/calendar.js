// The date.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
document.getElementById("day").innerHTML = date.getDate() + " " + months[date.getMonth()];
document.getElementById("year").innerHTML = date.getFullYear();

function myFunction(x) {
    x.classList.toggle("change");
}