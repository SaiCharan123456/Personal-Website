function toggleAdditionalContent() {
  var additionalContents = document.querySelectorAll('.hidden');
  var button = document.querySelector('.show-more-button');

  additionalContents.forEach(function(content) {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });

  // Change button text based on the current state of the first additional content
  var firstContent = additionalContents[0];
  if (firstContent.style.display === 'none') {
    button.textContent = 'Show More';
  } else {
    button.textContent = 'Show Less';
  }
}

let lastScrollTop = 0; // Store the last scroll position

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector("nav").classList.add("hide-nav");
    } else {
        // Scrolling up
        document.querySelector("nav").classList.remove("hide-nav");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// JavaScript to toggle the navigation menu
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
});

// JavaScript to slide down the navigation bar on scroll up
let lastScrolTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll < lastScrolTop) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-50px"; // Adjust based on nav height
    }
    lastScrolTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

function toggleDropdown() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

