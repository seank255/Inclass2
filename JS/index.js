const catbtn = document.querySelector("#cat");
const dogbtn = document.querySelector("#dog");
const cowbtn = document.querySelector("#cow");
const close = document.querySelectorAll('.hidebtn')
var cat = document.querySelector('#catpic');
var cow = document.querySelector('#cowpic');
var dog = document.querySelector('#dogpic');
catbtn.addEventListener("click",catImg);
dogbtn.addEventListener("click",dogImg);
cowbtn.addEventListener("click",cowImg);
function catImg(){
    document.querySelector('#catpic').style.visibility = "visible";
}
function dogImg(){
    document.querySelector('#dogpic').style.visibility = "visible";
}

function cowImg(){
    document.querySelector('#cowpic').style.visibility = "visible";
    
}
