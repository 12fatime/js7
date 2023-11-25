const a=document.createElement("input")
const labelElement=document.createElement("label")
const b=document.createElement("input")
const labelElement2=document.createElement("label")
const c=document.createElement("input")
const labelElement3=document.createElement("label")

a.setAttribute("type","radio")
a.setAttribute("value","Yashlilar uchun")
b.setAttribute("type","radio")
b.setAttribute("value","boyukler uchun")
c.setAttribute("type","radio")
c.setAttribute("value","kichikler uchun")
 
labelElement.innerText=a.value
labelElement2.innerText=b.value
labelElement3.innerText=c.value

bodyElement.append(labelElement,a,labelElement2,b,labelElement3,c,button)
let radio=document.querySelectorAll("input[name='hesab']")
button.addEventListener("click",() =>{
    radio.forEach(element =>{
        if(element.checked)
        console.log(item.value);
    })
})