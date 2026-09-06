// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Check stored preference or system default
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark-theme");
  if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Click Event Handler
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
}

const videoModal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const closeModal = document.getElementById("close-modal");

// Convert YouTube watch URL to Embed URL
function getEmbedUrl(url) {
  let videoId = "";
  if (url.includes("v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else {
    videoId = url;
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

// Click thumbnail to open popup
document.querySelectorAll(".thumb").forEach((thumb) => {
  thumb.style.cursor = "pointer";
  thumb.addEventListener("click", () => {
    const videoUrl = thumb.getAttribute("data-video-src");
    if (videoUrl) {
      modalVideo.src = getEmbedUrl(videoUrl);
      videoModal.classList.add("active");
    }
  });
});

// Close popup and stop video
function closePlayer() {
  videoModal.classList.remove("active");
  modalVideo.src = "";
}

closeModal.addEventListener("click", closePlayer);
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) closePlayer();
});
