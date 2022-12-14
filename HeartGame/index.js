const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const spanAdder = document.createElement("span");
    const posX = event.offsetX;
    const posY = event.offsetY;
    spanAdder.style.left = posX + 'px';
    spanAdder.style.top = posY + 'px';
    const size = Math.random()*100;
    spanAdder.style.width = size + 'px';
    spanAdder.style.height = size + 'px';
    bodyEl.appendChild(spanAdder);
    setTimeout(()=>{
        spanAdder.remove();
    }, 3000);
});