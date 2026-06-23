function openInvite(){
  document.getElementById("envelope-screen").style.display="none";
  document.getElementById("main-content").style.display="block";

  startMusic();
  startPetals();
  revealOnScroll();
}

function toggleMusic(){
  document.getElementById("music").play();
}

function startMusic(){
  let m=document.getElementById("music");
  m.volume=0.5;
  m.play().catch(()=>{});
}

/* PETALS */
function startPetals(){
  setInterval(()=>{
    let p=document.createElement("div");
    p.className="petal";
    p.innerHTML="🌸";
    p.style.left=Math.random()*window.innerWidth+"px";
    p.style.animationDuration=(3+Math.random()*3)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),6000);
  },200);
}

/* SCROLL ANIMATION */
function revealOnScroll(){
  const elements=document.querySelectorAll(".reveal");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.classList.add("show");
    });
  });
  elements.forEach(el=>observer.observe(el));
}

/* EASTER EGG */
function secret(){
  alert("Daniela te está observando 👀");
}
