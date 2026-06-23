// OPEN ENVELOPE
function openInvite() {
  document.getElementById("envelope-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";

  // try to play music (browser may require click)
  const music = document.getElementById("music");
  if (music) {
    music.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }
}

// COUNTDOWN
const eventDate = new Date("June 20, 2027 15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s 💗`;
}, 1000);
