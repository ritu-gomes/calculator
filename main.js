var button = document.getElementsByClassName("btn-light");
for (let index = 0; index < button.length; index++) {
    const element = button[index];
    element.addEventListener("click",function(){
        document.getElementById("result").value=document.getElementById("result").value+button[index].innerHTML;
    });
    
}

var equal = document.getElementById("equal");
equal.addEventListener("click",function(){
        document.getElementById("result").value = eval(document.getElementById("result").value);
});
var clear = document.getElementById("clear");
clear.addEventListener("click",function(){
    document.getElementById("result").value = "";
});
var erase = document.getElementById("erase");
erase.addEventListener("click",function(){
    document.getElementById("result").value = document.getElementById("result").value.toString().slice(0,-1);
});