//Global Variables
const masterBill = document.getElementById('content');
const masterBillDef = ['A Legal Binding Document that represents the contract of carriage between the shipper and carrier', 
'If you are the Buyer or/ Consignee, you must request this document to either the shipper or carrier',
'Remember, Master Bill of Lading(MBL) is issued by the CARRIER'];
const next = document.getElementById('nextButton');
const home = document.getElementById('homeButton');
const back = document.getElementById('backButton');


masterBill.addEventListener('click', (e) => {
  // statement that explains when a content is clicked, changet the text content to Bill of Lading information.
  (e.target.textContent === 'Click Me') ? e.target.textContent = masterBillDef : e.target.textContent = "Click Me"
});


back.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageOne.html";
});
next.addEventListener('click', (e) => {
  location.href = "../help-page-html/helpPageThree.html";
});
home.addEventListener('click', (e) => {
  location.href = "../index.html";
});

