function evaluateAnswer() {
  const answer = document.getElementById("userAnswer").value.trim();

  if (answer.length === 0) {
    alert("Please type an answer first.");
    return;
  }

  // Simulated AI confidence score (random but controlled)
  const score = Math.floor(Math.random() * 31) + 60; // 60–90%
  const scoreBox = document.getElementById("scoreBox");
  scoreBox.textContent = score + "%";

  // Set background color based on score
  if (score >= 70) {
    scoreBox.style.backgroundColor = "#4CAF50"; // green
  } else if (score >= 50 && score <= 69) {
    scoreBox.style.backgroundColor = "#FFC107"; // yellow
  } else {
    scoreBox.style.backgroundColor = "#F44336"; // red
  }

  // Dummy feedback based on score
  let feedbackText = "";
  if (score >= 85) {
    feedbackText = "Great explanation! You clearly understand the core differences.";
  } else if (score >= 70) {
    feedbackText = "Good effort! Try to add examples or clarify terminology.";
  } else {
    feedbackText = "Needs improvement. Focus on defining what a stack and a queue are, and when to use each.";
  }

  document.getElementById("feedback").textContent = feedbackText;
}