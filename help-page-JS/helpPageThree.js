//Global Variables
const SCACList = ['HDMU1234567890', 'CMDUW154855233', 'COSU987514552'];
const masterBill = document.getElementById('content');
const next = document.getElementById('nextButton');
const home = document.getElementById('homeButton');
const back = document.getElementById('backButton');


masterBill.addEventListener('click', (e) => {
  // statement that explains when a content is clicked, changet the text content to Bill of Lading information.
  for(let i= 0; i < SCACList.length; i++) {
    if(e.target.textContent === 'Click Me'){
      e.target.textContent = SCACList[i]; 
      } else {
        e.target.textContent = "Click Me"; 
      }
  };
 
});


back.addEventListener('click', (e) => {
  location.href = "../HELP-PAGE/helpPageTwo.html";
});
next.addEventListener('click', (e) => {
  location.href = "../HELP-PAGE/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../homePage.html";
});
