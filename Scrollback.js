// Your existing scripts

function scrollToTop() {
  // Scroll to the top of the page with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide scroll-back button based on scroll position
window.onscroll = function () {
  var scrollBackButton = document.getElementById("scrollBackButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBackButton.style.display = "block";
  } else {
    scrollBackButton.style.display = "none";
  }
};