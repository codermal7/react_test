// taggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const img = document.querySelector(".about-img");
const img2 = document.querySelector(".home-img");
const tiltAmount = 20;

img.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  const { offsetWidth, offsetHeight } = e.target;
  const xPos = (offsetX / offsetWidth - 0.5) * tiltAmount;
  const yPos = (offsetY / offsetHeight - 0.5) * -tiltAmount;
  img.style.transform = `perspective(800px) rotateX(${yPos}deg) rotateY(${xPos}deg)`;
});

img.addEventListener("mouseleave", () => {
  img.style.transform = "none";
});

img2.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  const { offsetWidth, offsetHeight } = e.target;
  const xPos = (offsetX / offsetWidth - 0.5) * tiltAmount;
  const yPos = (offsetY / offsetHeight - 0.5) * -tiltAmount;
  img2.style.transform = `perspective(800px) rotateX(${yPos}deg) rotateY(${xPos}deg)`;
});

img2.addEventListener("mouseleave", () => {
  img2.style.transform = "none";
});

// scroll sections active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click navbar link(scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});


// $(document).ready(function() {
//   function animateText() {
//       var textList = ['Web Developer', 'ML Enthusiast', 'Web Designer','Passionate Coder'];
//       var index = 0;

//       function changeText() {
//           var span = $('h3.andI span');
//           span.removeClass('slideIn');
//           span.addClass('slideOut');
//           setTimeout(function() {
//               span.text(textList[index]);
//               span.removeClass('slideOut');
//               span.addClass('slideIn');
//           }, 1000);

//           index = (index + 1) % textList.length;
//       }

//       setInterval(changeText, 1000);
//   }

//   animateText();
// });



//   function animateText() {
//       var textList = ['DSA', 'DEV'];
//       var index = 0;
//       var isFirstText = true;

//       function changeText() {
//           var span = $('h1 span');
//           span.removeClass('slideIn');
//           span.addClass('slideOut');
//           setTimeout(function() {
//               span.text(textList[index]);
//               span.removeClass('slideOut');
//               span.addClass('slideIn');
//           }, isFirstText ? 760 : 0);

//           isFirstText = false;
//           index = (index + 1) % textList.length;
//       }

//       changeText();
//       setInterval(changeText, 1200);
//   }

//   animateText();
// });




const jobTitles = [
  'DSA',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'ExpressJs',
  'MongoDB'
];

let currentTitleIndex = 0;
let currentCharIndex = 0;
let eraseMode = false;

const spanElement = document.getElementById('job-title');
const delayBetweenChars = 200; // Adjust the delay to control typing speed
const eraseDelay = 100; // Adjust the delay for text erasing

function typeText() {
  const currentTitle = jobTitles[currentTitleIndex];

  if (eraseMode) {
      spanElement.textContent = currentTitle.slice(0, currentCharIndex);
      currentCharIndex--;

      if (currentCharIndex >= 0) {
          setTimeout(typeText, eraseDelay);
      } else {
          eraseMode = false;
          currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
          setTimeout(typeText, delayBetweenChars);
      }
  } else {
      spanElement.textContent = currentTitle.slice(0, currentCharIndex + 1);
      currentCharIndex++;

      if (currentCharIndex < currentTitle.length) {
          setTimeout(typeText, delayBetweenChars);
      } else {
          eraseMode = true;
          setTimeout(typeText, eraseDelay);
      }
  }
}

typeText();

