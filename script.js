const moods = {
  happy: { color: "yellow", message: "Stay happy 😄" },
  sad: { color: "blue", message: "Don't worry everything will be fine. 💙" },
  calm: { color: "lightgreen", message: "Stay calm 😌" },
  angry: { color: "red", message: "Take a deep breath 😤" }
};

function changeMood(mood) {
  document.body.style.backgroundColor = moods[mood].color;
  document.getElementById("text").innerText = moods[mood].message;
}