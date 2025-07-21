const buttons = document.querySelectorAll(".toggle-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.closest(".accordion-item");
    const content = accordionItem.querySelector(".accordion-content");
    const icon = button.querySelector("img");

    // If content doesn't exist, exit
    if (!content) return;

    const isOpen = content.style.display === "block";

    // Close all answers
    document.querySelectorAll(".accordion-content").forEach((el) => {
      el.style.display = "none";
    });

    // Reset all icons
    document.querySelectorAll(".toggle-button").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.querySelector("img").src = "./assets/images/icon-plus.svg";
    });

    // If this one wasn't open, open it
    if (!isOpen) {
      content.style.display = "block";
      button.setAttribute("aria-expanded", "true");
      button.querySelector("img").src = "./assets/images/icon-minus.svg";
    }
  });
});
