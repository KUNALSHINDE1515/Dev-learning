// let url = 'https://script.google.com/macros/s/AKfycbwx0RcK4OzUwPV9KNOX2p-0U0HcLn96IEViMYXyxaZWL1Fwejj3fea0d9s3PlbxctxfDw/exec'

// let mval2 = document.querySelector('#phoneNumber_2').value
// let mval1 = document.querySelector('#phoneNumber_1').value
// let submitbn = document.getElementById('enquiryForm')

// submitbn.addEventListener('submit', function(e) {
  
//   const m1 = Number(e.target.phoneNumber_1.value)
//   const m2 = Number(e.target.phoneNumber_2.value)

  
  
//   if (validateMobileNumber(m1)) {

//   } else {
//     alert("Please Enter a Valid Phone Number.");
//     window.stop()
//   }
  
//   if (validateMobileNumber(m2)) {

//   }else{
//     alert("Please Enter a Valid Phone Number.");
//     window.stop()
//   }
  

  
//   let formData = new FormData(this);
//     fetch(url ,{
//       method:"POST",
//       body:formData
//     }).then((res) => res.text())
//     .then((finalRes) =>{ 
//       alert(finalRes)
//       location.reload();
//     })
    
//     e.preventDefault();
//   });
  

//   function validateMobileNumber(phoneNumber) {
//     const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     return regex.test(phoneNumber);
//   }
  
  


// let url = 'https://script.google.com/macros/s/AKfycbwx0RcK4OzUwPV9KNOX2p-0U0HcLn96IEViMYXyxaZWL1Fwejj3fea0d9s3PlbxctxfDw/exec';

// let submitbn = document.getElementById('enquiryForm');

// submitbn.addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent default form submission

//   const m1 = e.target.phoneNumber_1.value.trim();
//   const m2 = e.target.phoneNumber_2.value.trim();

//   // Validate both phone numbers
//   if (!validateMobileNumber(m1)) {
//     alert("Please enter a valid phone number for Phone Number 1.");
//     return;
//   }

//   if (!validateMobileNumber(m2)) {
//     alert("Please enter a valid phone number for Phone Number 2.");
//     return;
//   }

//   let formData = new FormData(this);

//   fetch(url, {
//     method: "POST",
//     body: formData
//   })
//   .then(res => res.text())
//   .then(finalRes => {
//     alert(finalRes);
//     location.reload(); // Reload the page after successful submission
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert('There was an error submitting the form. Please try again.');
//   });
// });

// function validateMobileNumber(phoneNumber) {
//   const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   return regex.test(phoneNumber);
// }



// let url = 'https://script.google.com/macros/s/AKfycbwx0RcK4OzUwPV9KNOX2p-0U0HcLn96IEViMYXyxaZWL1Fwejj3fea0d9s3PlbxctxfDw/exec';

// let submitbn = document.getElementById('enquiryForm');

// submitbn.addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent default form submission

//   const m1 = e.target.phoneNumber_1.value.trim();
//   const m2 = e.target.phoneNumber_2.value.trim();

//   // Validate both phone numbers
//   if (!validateMobileNumber(m1)) {
//     alert("Please enter a valid phone number for Phone Number 1.");
//     return;
//   }

//   if (!validateMobileNumber(m2)) {
//     alert("Please enter a valid phone number for Phone Number 2.");
//     return;
//   }

//   // Show loading message
//   const loadingMessage = document.getElementById('loadingMessage');
//   loadingMessage.style.display = 'block';

//   let formData = new FormData(this);

//   fetch(url, {
//     method: "POST",
//     body: formData
//   })
//   .then(res => res.text())
//   .then(finalRes => {
//     // Hide loading message
//     loadingMessage.style.display = 'none';
    
//     // Show thank you message
//     alert('Thank you for submitting your data.');
    
//     location.reload(); // Reload the page after successful submission
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert('There was an error submitting the form. Please try again.');
//     loadingMessage.style.display = 'none'; // Hide loading message in case of error
//   });
// });

// function validateMobileNumber(phoneNumber) {
//   const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   return regex.test(phoneNumber);
// }


let url = 'https://script.google.com/macros/s/AKfycbwx0RcK4OzUwPV9KNOX2p-0U0HcLn96IEViMYXyxaZWL1Fwejj3fea0d9s3PlbxctxfDw/exec';

let submitbn = document.getElementById('enquiryForm');

submitbn.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const m1 = e.target.phoneNumber_1.value.trim();
  const m2 = e.target.phoneNumber_2.value.trim();

  // Validate both phone numbers
  if (!validateMobileNumber(m1)) {
    alert("Please enter a valid phone number for Phone Number 1.");
    return;
  }

  if (!validateMobileNumber(m2)) {
    alert("Please enter a valid phone number for Phone Number 2.");
    return;
  }

  // Show loading message
  const loadingMessage = document.getElementById('loadingMessage');
  loadingMessage.style.display = 'block';

  let formData = new FormData(this);

  fetch(url, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(finalRes => {
    // Hide loading message
    loadingMessage.style.display = 'none';

    // Display H1 NONE
    document.querySelector("h1").style.display = "None"
    
    // Replace form content with thank you message
    submitbn.innerHTML = '<p class="Confirm">Thank you for submitting your data.</p>';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again.');
    loadingMessage.style.display = 'none'; // Hide loading message in case of error
  });
});

function validateMobileNumber(phoneNumber) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phoneNumber);
}
