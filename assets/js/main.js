/**
 * Lafz Welfare Foundation - Main JavaScript
 * Handles Gallery Modal and Smooth Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initGalleryModal();
  initScrollEffects();
  initContactForm();
});

/**
 * Gallery Modal Functionality
 */
function initGalleryModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const galleryImages = document.querySelectorAll(".gallery img");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !closeBtn) return;

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      document.body.style.overflow = "hidden"; // Prevent scroll when modal is open
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // ESC key to close modal
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
}

/**
 * Scroll and Navigation Effects
 */
function initScrollEffects() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

/**
 * Contact Form Interaction
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simple validation feedback
    const btn = form.querySelector(".btn-submit");
    const originalText = btn.innerText;
    
    btn.innerText = "मेसेज भेजा जा रहा है...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert("धन्यवाद! आपका संदेश हमें मिल गया है। हम जल्द ही आपसे संपर्क करेंगे।");
      form.reset();
      btn.innerText = originalText;
      btn.style.opacity = "1";
      btn.disabled = false;
    }, 1500);
  });
}
