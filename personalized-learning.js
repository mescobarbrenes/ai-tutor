function getRecommendationsBasedOnProgress() {
    return [
      {
        title: "Introduction to Recursion",
        link: "https://www.geeksforgeeks.org/recursion/",
        description: "You struggled with recursion—review this guide."
      },
      {
        title: "JavaScript Promises Explained",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
        description: "Based on your recent code submissions."
      },
      {
        title: "Debugging Strategies in Python",
        link: "https://realpython.com/python-debugging-pdb/",
        description: "Improve your debugging skills for future projects."
      }
    ];
  }
  
  function loadRecommendations() {
    const recommendations = getRecommendationsBasedOnProgress();
    const list = document.getElementById("recommendationList");
    list.innerHTML = "";
  
    recommendations.forEach(rec => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${rec.link}" target="_blank">${rec.title}</a> – ${rec.description}`;
      list.appendChild(li);
    });
  }
  
  function showHelp() {
    alert(
      "How to Use Personalized Learning:\n\n" +
      "1. Resources are suggested based on your learning.\n" +
      "2. Click on the titles to read or watch.\n" +
      "3. Refresh to regenerate recommendations."
    );
  }
  
  function goBack() {
    if (confirm("Go back to the main menu?")) {
      window.location.href = "index.html";
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadRecommendations);
  