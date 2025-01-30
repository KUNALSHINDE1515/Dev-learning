
// let url = 'https://script.google.com/macros/s/AKfycby3tM7aWQ-XXyJcNtwyxPopSKGsJdrXh2ts1PjJtqDCQue2L7_BYFGIVIUwKC8wEJfnRQ/exec';
let url = 'https://script.google.com/macros/s/AKfycbzjbwMTtjxhE1_zIevWUkx-kbvPepbsDI5MBJBlcSk8j1A3jv1yTjMRobEN11MS6KdudA/exec'
let submitbn = document.getElementById('enquiryForm');


submitbn.addEventListener('submit', function(e) {
  e.preventDefault(); 


  // Show loading message
  // const loadingMessage = document.getElementById('loadingMessage');
  // loadingMessage.style.display = 'block';
  
  let formData = new FormData(this);
  console.log(formData);

  // fetch(url, {
  //   method: "POST",
  //   body: formData
  // })
  // .then(res => res.text())
  // .then(finalRes => {
  //   // Hide loading message
  //   // loadingMessage.style.display = 'none';

  //   // Display H1 NONE
  //   document.querySelector("h1").style.display = "None"
    
  //   // Replace form content with thank you message
  //   submitbn.innerHTML = '<p class="Confirm">Thank you for submitting your data.</p>';
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  //   alert('There was an error submitting the form. Please try again.');
  //   loadingMessage.style.display = 'none'; // Hide loading message in case of error
  // });
});


