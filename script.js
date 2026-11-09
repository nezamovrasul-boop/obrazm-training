const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => { nav.classList.remove("is-open"); menuButton?.setAttribute("aria-expanded", "false"); });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealSelectors = [
  ".intro-grid > *",
  ".section-heading > *",
  ".pain-grid article",
  ".freedom-content > *",
  ".audience > h2",
  ".audience-list article",
  ".program-head > *",
  ".program-path",
  ".days details",
  ".speaker-copy > *",
  ".amenities > *",
  ".amenity-grid p",
  ".price-title > *",
  ".price-card",
  ".contact > *",
  ".final > *",
];

const revealElements = document.querySelectorAll(revealSelectors.join(","));
revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${(index % 4) * 85}ms`);
});

if (reduceMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -45px" },
  );

  revealElements.forEach((element) => observer.observe(element));

  const movingImages = document.querySelectorAll(".hero-image, .place-image, .freedom-photo, .speaker-image");
  const updateParallax = () => {
    movingImages.forEach((image) => {
      const rect = image.getBoundingClientRect();
      const shift = Math.max(-14, Math.min(14, (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.035));
      image.style.setProperty("--image-shift", `${shift}px`);
    });
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

const photoStrip = document.querySelector(".photo-strip");
if (photoStrip) {
  if (reduceMotion) {
    photoStrip.classList.remove("is-active");
  } else {
    const stripObserver = new IntersectionObserver(
      ([entry]) => {
        photoStrip.classList.toggle("is-active", entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    stripObserver.observe(photoStrip);
  }
}

const bookModal = document.querySelector("#book-modal");
let lastBookTrigger;
const openBookModal = () => {
  if (!bookModal) return;
  lastBookTrigger = document.activeElement;
  bookModal.hidden = false;
  bookModal.querySelector("button, a")?.focus();
  document.body.classList.add("modal-open");
};

const closeBookModal = () => {
  if (!bookModal) return;
  bookModal.hidden = true;
  lastBookTrigger?.focus();
  document.body.classList.remove("modal-open");
};

document.querySelectorAll(".js-book-open").forEach((button) => {
  button.addEventListener("click", openBookModal);
});

document.querySelectorAll(".js-book-close").forEach((element) => {
  element.addEventListener("click", closeBookModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookModal && !bookModal.hidden) {
    closeBookModal();
  }
});

bookModal?.addEventListener("keydown", (event) => {
 if(event.key!=="Tab") return;
 const nodes=[...bookModal.querySelectorAll('button,a[href]')];
 const first=nodes[0],last=nodes[nodes.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
});
