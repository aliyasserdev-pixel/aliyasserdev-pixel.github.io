// ================================
// Dynamic Skills System
// ================================

// Skills Data

const skillsArray = [
  {
    name: "HTML",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "Redux",
    experience: "Learning",
    type: "frontend",
  },
  {
    name: "React Testing Library",
    experience: "2025",
    type: "frontend",
  },
  {
    name: "Node.js",
    experience: "Learning",
    type: "bakend",
  },
  {
    name: "Express.js",
    experience: "Learning",
    type: "backend",
  },
  {
    name: "Mongodb",
    experience: "Learning",
    type: "backend",
  },
];

const skillsElement = document.querySelector("#skills");

const currentYear = new Date().getFullYear();

const generateListItem = (
  listItem,
) => `<li class="skills__column" data-type="${listItem.type}" data-name=${listItem.name}>
<h2 class="skills__title">${listItem.name}</h2>
<span class="skills__years">
  ${
    isNaN(listItem.experience)
      ? listItem.experience
      : `${currentYear - listItem.experience} Years`
  }
</span>
</li>`;

const listItemsString = skillsArray
  .map((listItem) => generateListItem(listItem))
  .join("");

const unorderdList = `<ul class="skills__list">${listItemsString}</ul>`;

skillsElement?.insertAdjacentHTML("beforeend", unorderdList);

document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(".skills__list").classList =
      `skills__list ${element.dataset.type}`;
  });
});
