window.addEventListener("scroll",()=>{
document.querySelectorAll("img").forEach(img=>{
let pos = img.getBoundingClientRect().top;
if(pos < window.innerHeight){
img.classList.add("zooming");
}
});
});
