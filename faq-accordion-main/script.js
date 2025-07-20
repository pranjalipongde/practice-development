const buttons = document.querySelectorAll(".plus-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.closest(".accordion-item");
    const content = accordionItem.querySelector(".accordion-content");

    // If content doesn't exist, exit
    if (!content) return;

    const isOpen = content.style.display === "block";

    // Close all answers
    document.querySelectorAll(".accordion-content").forEach((el) => {
      el.style.display = "none";
    });

    // Reset all icons
    document.querySelectorAll(".plus-button").forEach((btn) => {
      btn.src = "./assets/images/icon-plus.svg";
    });

    // If this one wasn't open, open it
    if (!isOpen) {
      content.style.display = "block";
      button.src = "./assets/images/icon-minus.svg";
    }
  });
});
