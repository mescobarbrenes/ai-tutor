function evaluateAnswer() {
  const answer = document.getElementById("userAnswer").value.trim();

  if (answer.length === 0) {
    alert("Please type an answer first.");
    return;
  }

  document.querySelector(".result-section").style.display = "block";
  document.querySelector(".resources-section").style.display = "block";

  //simulated AI confidence score (random but controlled)
  const score = Math.floor(Math.random() * 31) + 60; // 60–90%
  const scoreBox = document.getElementById("scoreBox");
  scoreBox.textContent = score + "%";
  scoreBox.style.display = "inline-block";

  //set background color based on score
  if (score >= 70) {
    scoreBox.style.backgroundColor = "rgb(76, 175, 80)";
  } else if (score >= 50 && score <= 69) {
    scoreBox.style.backgroundColor = "rgb(255, 193, 7)";
  } else {
    scoreBox.style.backgroundColor = "rgb(244, 67, 54)";
  }

  //dummy feedback based on score
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

function showHelp() {
  alert(
    "How to Use AI Answer Confidence Scorer:\n\n" +
    "1. Read the question carefully.\n" +
    "2. Type your answer in the box.\n" +
    "3. Click 'Submit Answer' to get AI feedback.\n" +
    "4. Use the links below to explore more resources.\n" +
    "5. Click 'Try Another Question' to reset.\n\n" +
    "Or click 'Return to Main Menu' to exit."
  );
}

function goBack() {
  const confirmExit = confirm("Are you sure you want to return to the main menu?")
  if (confirmExit) {
    location.href = "index.html";
  }
}

