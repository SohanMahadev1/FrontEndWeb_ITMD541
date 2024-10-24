'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Corrected typo from [data-selecct-value]
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle select dropdown on click
select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// Filtering function
const filterFunc = function (selectedValue) {
  // Normalize selected value for case-insensitivity
  selectedValue = selectedValue.toLowerCase();

  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category.toLowerCase(); // Normalize category

    if (selectedValue === "all") {
      filterItems[i].classList.add("active"); // Show all items
    } else if (selectedValue === itemCategory) {
      filterItems[i].classList.add("active"); // Show matching items
    } else {
      filterItems[i].classList.remove("active"); // Hide non-matching items
    }
  }
}

// Add event listeners to all select items (dropdown filters)
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get selected value in lowercase
    selectValue.innerText = this.innerText; // Update the dropdown text
    elementToggleFunc(select);  // Hide the dropdown after selection
    filterFunc(selectedValue);  // Apply the filter based on dropdown selection
  });
}

// Add event in all filter button items for large screen (button filters)
let lastClickedBtn = filterBtn[0]; // Track last clicked button

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get the selected filter category
    selectValue.innerText = this.innerText; // Sync dropdown with button selection
    filterFunc(selectedValue); // Apply the filter function

    // Remove active class from the last clicked button and add to the current one
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this; // Update the last clicked button
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0); // Scroll to top on navigation
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

