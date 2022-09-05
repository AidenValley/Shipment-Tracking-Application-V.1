// Global Variables
const home = document.getElementById('homeButton');
const back = document.getElementById('backButton');

// const billImage = document.createElement('')
document.querySelectorAll('img').forEach((item) => {
  item.addEventListener("click", (e) => {
    const image = e.target.getAttribute('data-src');
    e.target.setAttribute("src", image);
  });
});

back.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../index.html";
});