const  bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const  closed = document.getElementById('closed');

if(bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}
if(closed){
    closed.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}

const prod = document.querySelectorAll(".pro");
const sprod = document.querySelector("#sproduct .sprod-image .sprod-row");

prod.forEach((item)=>{
    item.addEventListener('click',()=>{
            console.log(item.firstElementChild.src);
            localStorage.setItem("Image",item.firstElementChild.src);
            window.location.href='sproduct.html';
        })
    });
document.addEventListener("DOMContentLoaded",()=>{
    const source = localStorage.getItem("Image");
    sprod.firstElementChild.src = source;
    // localStorage.clear(); 
    console.log("hai")

})






  


