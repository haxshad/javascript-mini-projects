const navbarEl = document.querySelector(".navbar");
const textContainerEl = document.querySelector(".text-container");

console.log(navbarEl.offsetHeight);

console.log(textContainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > textContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }

    else{
        navbarEl.classList.remove("active");
    }
});