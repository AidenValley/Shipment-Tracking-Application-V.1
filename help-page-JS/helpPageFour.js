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


// masterBill.addEventListener('click', (e) => {
//   (e.target.textContent === 'Click Me') ? e.target.textContent= img: e.target.textContent = "Click Me"
// });

back.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../index.html";
});