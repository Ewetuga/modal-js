const shown = document.getElementById("show");
const part = document.getElementById("ot");
const cancel = document.getElementById("cancel")

shown.addEventListener("click",()=>{

part.style.visibility ="visible";
part.style.zIndex = 10;
});

cancel.addEventListener("click", ()=>{
    part.style.visibility ="hidden";
    part.style.zIndex= -10;
})