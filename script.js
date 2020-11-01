//modal

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Form

let name = document.getElementById('modal_name');
let phone = document.getElementById('modal_phone');
let bt = document.getElementById('modal_btn');

bt.onclick = function() {
    console.log (name.value);
    console.log (phone.value);
}