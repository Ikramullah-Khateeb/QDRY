// hero slider effect

const tabs = document.querySelectorAll(".hero-tab");
const title = document.getElementById("hero-title");
const hero = document.getElementById("hero");

const contentData = [
  {
    title: "Premium Shade Structures for Style & Comfort",
    image: "assets/images/hero-image3.png"
  },
  {
    title: "Customized tent solutions for all occasions",
    image: "assets/images/hero-image1.jpg"
  },
  {
    title: "Luxury Pergola Solutions for Elegant Outdoors",
    image: "assets/images/hero-image2.jpg"
  },
];

let currentIndex = 0; // Track current slide

function showSlide(index) {
  title.textContent = contentData[index].title;
  hero.style.backgroundImage = `url(${contentData[index].image})`;

  tabs.forEach(t => t.classList.remove("active"));
  tabs[index].classList.add("active");
}

// Set default slide on page load
window.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

// Manual tab click (still works)
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    currentIndex = parseInt(tab.getAttribute("data-index"));
    showSlide(currentIndex);
  });
});

// ✅ NEW: Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % contentData.length;
  showSlide(currentIndex);
}, 4000); // Change slide every 5 seconds



// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav-container');

  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});



// FAQ script
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// for stats
function animateCounter(element, target, duration, suffix) {
  let start = 0;
  const increment = target / (duration / 16);
  const isDecimal = target % 1 !== 0;

  const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
          element.textContent = (isDecimal ? target.toFixed(1) : Math.ceil(target)) + suffix;
          clearInterval(timer);
      } else {
          element.textContent = (isDecimal ? start.toFixed(1) : Math.ceil(start)) + suffix;
      }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const target = parseFloat(entry.target.dataset.target);
              const suffix = entry.target.dataset.suffix || '';
              animateCounter(entry.target, target, 2000, suffix);
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

window.addEventListener('load', initCounters);

// for back to top arrow
  const scrollBtn = document.getElementById("scrollToTop");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // for hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle('open');
});

// Close menu when click outside
document.addEventListener('click', (event) => {
  const isClickInsideToggle = hamburger.contains(event.target);
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideToggle && !isClickInsideMenu) {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
  }
});
