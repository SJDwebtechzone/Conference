

  //Carousel//

// Carousel Smooth Slider
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;

  let index = 0;

  function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("prevBtn").onclick = () => showSlide(index - 1);
  document.getElementById("nextBtn").onclick = () => showSlide(index + 1);

  // Auto-slide every 4 seconds
  setInterval(() => showSlide(index + 1), 4000);


// Reusable dropdown function
function setupDropdown(btnId, menuId, arrowId) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  const arrow = document.getElementById(arrowId);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    }
  });
}

// About dropdown
setupDropdown("aboutBtn", "aboutMenu", "arrowIcon");

// Paper Submission dropdown
setupDropdown("paperBtn", "paperMenu", "arrowIcon2");

// For Authors dropdown
// setupDropdown("authorsBtn", "authorsMenu", "arrowIcon3");



// Modal elements
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("registrationModal");
    const openBtns = document.querySelectorAll(".openModal");
    const closeBtn = document.getElementById("closeModal");

    // Open modal from any button
    openBtns.forEach(button => {
      button.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    // Close on clicking outside the modal content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });



 // Modal elements
// const modal = document.getElementById("registrationModal");
// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");
// Open modal
// openBtn.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });

// Close modal
// closeBtn.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// Close on clicking outside
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.classList.add("hidden");
//   }
// });



// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');

    document.querySelectorAll('.faq-answer').forEach((ans) => {
      if (ans !== answer) ans.classList.add('hidden');
    });
    document.querySelectorAll('.faq-icon').forEach((icn) => {
      if (icn !== icon) icn.textContent = '+';
    });

    answer.classList.toggle('hidden');
    icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
  });
});


//Scroll behavior script -->

  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backToTop.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

    document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form behavior
    const form = this;

    // Send form data using AJAX
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      alert(result); // Show success message
      form.reset();  // Clear the form
    })
    .catch(error => {
      alert("Error submitting form.");
      console.error(error);
    });
  });

//Mobile Menu Toggle Script
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

