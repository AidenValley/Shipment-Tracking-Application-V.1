//Global Variables
const SCACLists = ['HDMU1234567890', 'CMDUW154855233', 'COSU987514552', 'HLCUL45786580', 'OOLU098577412'];
const masterBill = document.getElementById('content');
const next = document.getElementById('nextButton');
const home = document.getElementById('homeButton');
const back = document.getElementById('backButton');


masterBill.addEventListener('click', (e) => {
  // statement that explains when a content is clicked, change the text content to Bill of Lading information.
  SCACLists.forEach(SCACList => {
    let ascendSCACList = SCACLists.sort((a, b) => a > b ? 1 : -1);
    console.log(ascendSCACList);
    masterBill.textContent === "Click Me" ? masterBill.innerHTML = ascendSCACList.join("<br>") : masterBill.textContent = "Click Me"
  });
});


back.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageTwo.html";
});
next.addEventListener('click', (e) => {
  // location.href = "../help-page-html/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../index.html";
});
