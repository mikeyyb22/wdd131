let reviewCount = Number(localStorage.getItem("review-count")) || 0;

reviewCount++;

localStorage.setItem("review-count", reviewCount);

document.querySelector("#reviewTotal").textContent =
  `Reviews completed: ${reviewCount}`;