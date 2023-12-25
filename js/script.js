"use strict";
// SELECTIONS
const tabRow = document.querySelector(".tab-row");
const allTabBtn = document.querySelectorAll(".tab-item");
const allTabs = document.querySelectorAll(".tab-text");
// EVENT HANDLERS
tabRow.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab-item")) return;
  allTabBtn.forEach((btn) => btn.classList.remove("active"));
  allTabs.forEach((tab) => tab.classList.add("d-none"));
  e.target.classList.add("active");
  const tab = document.querySelector(`[data-text="${e.target.dataset.tab}"]`);
  tab.classList.remove("d-none");
});
