const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("active");
  });
});
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all FAQs
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".icon").textContent = "+";
    });

    // Open the clicked FAQ if it wasn't already open
    if (!isActive) {
      item.classList.add("active");
      item.querySelector(".icon").textContent = "−";
    }
  });
});