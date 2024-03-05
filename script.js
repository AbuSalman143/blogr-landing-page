let list=document.querySelectorAll(".list");
let down_arrow=document.querySelectorAll(".fa-angle-down")
let up_arrow=document.querySelectorAll(".fa-angle-up")
let menu_name=document.querySelectorAll(".menu-text");
let drop_down_list=document.querySelectorAll(".drop_down_list");
console.log(drop_down_list);

for(let i=0;i<list.length;i++){
   
    list[i].addEventListener("mouseover",()=>{
       up_arrow[i].style.display="block";
       down_arrow[i].style.display="none"
       menu_name[i].style.textDecoration="underline"
       drop_down_list[i].style.display="flex";
    })
    drop_down_list[i].addEventListener("mouseleave",()=>{
       up_arrow[i].style.display="none";
       down_arrow[i].style.display="block"
       menu_name[i].style.textDecoration="none"
       drop_down_list[i].style.display="none";
    })
}


let hamburger=document.querySelector(".hamburger");
let nav_cantainer=document.querySelector(".nav-cantainer");
// hamburger.addEventListener("click",()=>{
//    nav_cantainer.classList.toggle("nav_active");
//    hamburger.style.display="none"
//    close_menu.style.display="block"

// })
let close_menu=document.querySelector(".close_menu");
// close_menu.addEventListener("click",()=>{
   // nav_cantainer.classList.toggle("nav_active");
//    hamburger.style.display="block";
//    close_menu.style.display="none"
// })


function toggleMenu() {
   nav_cantainer.classList.toggle("nav_active");
   hamburger.style.display = "none";
   close_menu.style.display = "block";
}

function closeMenu() {
   nav_cantainer.classList.toggle("nav_active");
   hamburger.style.display = "block";
   close_menu.style.display = "none";
}
hamburger.addEventListener("click", () => {
   toggleMenu();
});

close_menu.addEventListener("click", () => {
   closeMenu();
});

window.addEventListener("resize", () => {
   if (window.matchMedia("(min-width: 750px)").matches) {
       
       hamburger.style.display = "none";
       close_menu.style.display = "none";
       nav_cantainer.classList.remove("nav_active");
   } else {
      hamburger.style.display = "block";
   }
});