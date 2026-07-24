const tabs = document.querySelectorAll(".tab");

const sections = document.querySelectorAll(".tab-content");


tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => {
      button.classList.remove("active");
    });

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    tab.classList.add("active");

    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});