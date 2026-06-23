function openInvite(){
  document.getElementById("envelope-screen").style.opacity="0";

  setTimeout(()=>{
    document.getElementById("envelope-screen").style.display="none";
    document.getElementById("main-content").style.display="block";

    startPetals();
    revealOnScroll();
    startCountdown();
    startMusic();

  },600);
}

/* 🎵 MUSIC */
function startMusic(){
  const music=document.getElementById("music");
  if(!music) return;

  music.volume=0.5;
  music.play().catch(()=>{});
}

function toggleMusic(){
  const music=document.getElementById("music");
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}

/* 🌸 PETALS */
function startPetals(){
  setInterval(()=>{
    let p=document.createElement("div");
    p.className="petal";
    p.innerHTML="🌸";
    p.style.left=Math.random()*window.innerWidth+"px";
    p.style.animationDuration=(3+Math.random()*4)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),7000);
  },200);
}

/* ✨ SCROLL REVEAL */
function revealOnScroll(){
  const els=document.querySelectorAll(".reveal");

  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("show");
      }
    });
  });

  els.forEach(el=>obs.observe(el));
}

/* ⏱ COUNTDOWN */
function startCountdown(){
  const targetDate=new Date("June 20, 2027 15:00:00").getTime();

  setInterval(()=>{
    const now=new Date().getTime();
    const diff=targetDate-now;

    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((diff%(1000*60))/1000);

    document.getElementById("timer").innerHTML=
      `${days}d ${hours}h ${minutes}m ${seconds}s`;

  },1000);
}

/* 😂 SECRET */
function secret(){
  alert("⚠ Daniela te está observando... especialmente si no eres amante del matcha 👀💚");
}
