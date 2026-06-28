const cover=document.getElementById("cover");

const card=document.getElementById("card");

const flap=document.querySelector(".flap");

const letter=document.querySelector(".letter");

const music=document.getElementById("music");

cover.addEventListener("click",()=>{

flap.style.transform="rotateX(180deg)";

letter.style.transform="translateY(-140px)";

setTimeout(()=>{

cover.style.display="none";

card.style.display="block";

music.play();

},1200);

});