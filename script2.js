const input=document.createElement("input");
const openButton=document.createElement("button");
const closeButton=document.createElement("button");
openButton.innerText="open"
closeButton.innerText="close"
document.body.append(input,openButton,closeButton)
openButton.disabled=true;
closeButton.addEventListener("click",() =>{
    openButton.disabled=false;
    closeButton.disabled=true;
    input.disabled=true;
})
openButton.addEventListener("click",() =>{
    closeButton.disabled=false;
    input.disabled=false;
    openButton.disabled=true;
})