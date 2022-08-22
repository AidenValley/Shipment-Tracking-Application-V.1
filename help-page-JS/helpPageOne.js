//querySelector
const billOfLading = document.getElementById('content');
const BOLDefinition = ['Bill of Lading: A legally binding document between a shipper and carrier that details all the information needed to procees a frieght shipment']

billOfLading.addEventListener('click', (e) => {
  // statement that explains when a content is clicked, changet the text content to Bill of Lading information.
  (e.target.textContent === 'Click Me') ? e.target.textContent = BOLDefinition : e.target.textContent = "Click Me"
  // if(e.target.textContent === 'Click Me'){
  //   e.target.textContent = BOLDefinition; 
  //   } else {
  //     e.target.textContent = "Click Me"; 
  //   }
  
})

