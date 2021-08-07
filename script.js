var p=document.getElementById("input");
var q=document.getElementById("btn");
var r=document.getElementById("todo");
var s=document.getElementById("btn1");
const myfunction=()=>{
    // var const name = new type(arguments);
    var name=document.createElement("h2");
    name.classList.add("section");
    name.innerText=p.value;
    r.appendChild(name);
    p.value="";
    name.addEventListener("click",function(){
         if(name.style.color=="yellow")
        name.style.color="green";
        else
          name.style.color="yellow";
    })
    name.addEventListener("dblclick",function(){
         
          r.removeChild(name);
    })
}

