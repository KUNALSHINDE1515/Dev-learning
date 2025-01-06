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

  let formData = new FormData(this);

  fetch(url, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(finalRes => {
    alert(finalRes);
    location.reload(); // Reload the page after successful submission
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again.');
  });
});

function validateMobileNumber(phoneNumber) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phoneNumber);
}
