let musicOn=false;

/* ENVELOPE OPEN */
function openInvite(){
  document.getElementById("envelope-screen").style.opacity="0";

  setTimeout(()=>{
    document.getElementById("envelope-screen").style.display="none";
    document.getElementById("main-content").style.display="block";

    startPetals();        // 🌸 start animation
    revealOnScroll();     // ✨ scroll effects
    startMusic();         // 🎵 optional music auto-start
  },600);
}

/* MUSIC */
function toggleMusic(){
  const music = document.getElementById("music");

  if(!music) return;

  // try play safely
  music.play().then(() => {
    music.volume = 0.5;
    musicOn = true;
  }).catch((err) => {
    console.log("Audio blocked until interaction:", err);
  });

  // toggle pause if already playing
  if(musicOn){
    music.pause();
    musicOn = false;
  } else {
    musicOn = true;
  }
}

function fadeIn(audio){
  let v=0;
  let i=setInterval(()=>{
    if(v<0.5){
      v+=0.05;
      audio.volume=v;
    }else{
      clearInterval(i);
    }
  },100);
}

/* PETALS INSANE */
function startPetals(){
  setInterval(()=>{
    let p=document.createElement("div");
    p.className="petal";
    p.innerHTML=["🌸","🌺","💮"][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*window.innerWidth+"px";
    p.style.fontSize=(12+Math.random()*20)+"px";
    p.style.animationDuration=(3+Math.random()*5)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),7000);
  },120);
}

/* SCROLL REVEAL */
function revealOnScroll(){
  const el=document.querySelectorAll(".reveal");
  const obs=new IntersectionObserver(e=>{
    e.forEach(x=>{
      if(x.isIntersecting)x.target.classList.add("show");
    });
  });
  el.forEach(e=>obs.observe(e));
}

/* EASTER EGG */
function secretAmy(){
  alert("🔬 INVESTIGACIÓN: Amy sigue siendo un fenómeno sin explicación científica.");
}

/* VIP SECRET MODE */
document.addEventListener("keydown",(e)=>{
  if(e.key==="d"){
    document.body.style.filter="hue-rotate(200deg)";
    alert("VIP MODE ACTIVATED 💎");
  }
});
