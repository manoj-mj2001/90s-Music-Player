const songs = [
  {
    title: "Laal Dupatta",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Laal Dupatta.mp3",
  },
  {
    title: "Is Tarah Aashiqui Ka",
    artist: "Kumar Sanu",
    cover: "./images/SanuDa.jpeg",
    src: "./songs/kumar sanu/Is Tarah Aashiqui Ka.mp3",
  },
  {
    title: "Chori Chori Chupke Chupke",
    artist: "Alka Yagnik",
    cover: "./images/AlkaYagnik.jpg",
    src: "./songs/alka yagnik/Chori Chori Chupke Chupke.mp3",
  },
  {
    title: "Rab Kare",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Rab Kare.mp3",
  },
  {
    title: "Ladki Badi Anjani Hain",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Ladki Badi Anjani Hain.mp3",
  },
  {
    title: "Kahin Pyaar Na Ho Jaye",
    artist: "Alka Yagnik",
    cover: "./images/AlkaYagnik.jpg",
    src: "./songs/alka yagnik/Kahin Pyaar Na Ho Jaye.mp3",
  },
  {
    title: "Falak Dekhun",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Falak Dekhun.mp3",
  },
  {
    title: "Main Duniya Bhula Dunga",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Main Duniya Bhula Doonga.mp3",
  },
  {
    title: "Aapke Pyaar Mein",
    artist: "Alka Yagnik",
    cover: "./images/AlkaYagnik.jpg",
    src: "./songs/alka yagnik/Aapke Pyaar Mein.mp3",
  },
  {
    title: "Bin Tere Sanam",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Bin Tere Sanam.mp3",
  },
  {
    title: "Ek Sanam Chahiye",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Ek Sanam Chahiye.mp3",
  },
  {
    title: "Tere Naam",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Tere Naam.mp3",
  },
  {
    title: "Tu Meri Zindagi Hain",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Tu Meri Zindagi Hain.mp3",
  },
  {
    title: "Main Yahaan Hoon",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Main Yahaan Hoon.mp3",
  },
  {
    title: "Tu Pyaar Hain Kisi Aur Ka",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Tu Pyaar Hai Kisi Aur Ka.mp3",
  },
  {
    title: "Kyon Kisi Ko",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Kyon Kisi Ko.mp3",
  },
  {
    title: "Chand Se Parda",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Chand Se Parda.mp3",
  },
  {
    title: "Falak Tak",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Falak Tak.mp3",
  },
  {
    title: "Tere Dar Par Sanam",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Tere Dar Par Sanam.mp3",
  },
  {
    title: "Jaadu Teri Nazar",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Jaadu Teri Nazar.mp3",
  },
  {
    title: "Chori Chori Dil Tera Churayenge",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Chori Chori Dil Tera.mp3",
  },
  {
    title: "Bholi Si Surat",
    artist: "Udit Narayan",
    cover: "./images/UditNarayan.jpg",
    src: "./songs/udit narayan/Bholi Si Surat.mp3",
  },
  {
    title: "Dil Kehta Hain",
    artist: "Kumar Sanu",
    cover: "./images/KumarSanu.jpeg",
    src: "./songs/kumar sanu/Dil Kehta Hain.mp3",
  },
];

let currentIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const albumCover = document.getElementById("album-cover");
const songTitle = document.getElementById("song_title");
const artistName = document.getElementById("song_artist");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");
function loadSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  albumCover.src = song.cover;
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
}

function playSong() {
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.innerHTML = "&#10074;&#10074;";
}

function pauseSong() {
  audioPlayer.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = "&#9654;";
}

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

audioPlayer.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  if (audioPlayer.duration) {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;

    currentTimeEl.textContent = formatTime(currentTime);
    durationTimeEl.textContent = formatTime(duration);
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

progressBar.addEventListener("input", () => {
  const newTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
});

audioPlayer.addEventListener("ended", () => {
  nextBtn.click();
});

loadSong(currentIndex);
