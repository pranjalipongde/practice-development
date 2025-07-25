window.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const summaryContainer = document.querySelector(".summary-item");
      summaryContainer.innerHTML = ""; // Clear hardcoded content

      let total = 0;

      data.forEach((item) => {
        total += item.score;

        const itemHTML = `
          <div class="summary-block" style="background-color: ${item.bgColor}; padding: 0.6rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; ">
            <div class="label" style="display: flex; align-items: center; gap: 0.5rem; color: ${item.textColor}; font-weight: 700;">
              <img src="${item.icon}" alt="${item.category}" style="width: 1rem; height: 1rem;" />
              <p>${item.category}</p>
            </div>
            <div class="summary-score">
              <p class="score"><span>${item.score}</span> / 100</p>
            </div>
          </div>
        `;
        summaryContainer.innerHTML += itemHTML;
      });

      // Set average score (optional)
      const avg = Math.round(total / data.length);
      document.querySelector(".result-score").textContent = avg;
    });
});
