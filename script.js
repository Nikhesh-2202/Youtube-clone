// Feature 1: Dark / Light Mode Toggle
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Save user preference
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme on initial startup
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

// Feature 2: Play Video on Thumbnail Click
const videoModal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const closeModal = document.getElementById("close-modal");

// Attach click listener to each video card thumbnail
document.querySelectorAll(".thumb").forEach((thumb) => {
  thumb.style.cursor = "pointer";
  thumb.addEventListener("click", () => {
    // Replace with your video source file path or URL
    modalVideo.src = "videos/sample-video.mp4";
    videoModal.classList.add("active");
    modalVideo.play();
  });
});

// Close Video Modal
closeModal.addEventListener("click", closeVideoPlayer);
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) closeVideoPlayer();
});

function closeVideoPlayer() {
  videoModal.classList.remove("active");
  modalVideo.pause();
  modalVideo.currentTime = 0;
}
