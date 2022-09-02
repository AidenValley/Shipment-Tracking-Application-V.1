// Global Variables
const masterBill = document.getElementById('content');
const home = document.getElementById('homeButton');
const back = document.getElementById('backButton');
// const billImage = document.createElement('')

masterBill.addEventListener('click', (e) => {
  (e.target.textContent === 'Click Me') ? e.target.src = "../images/SAMPLE MASTER BILL OF LADING.png" : e.target.textContent = "Click Me"
});

back.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../index.html";
});