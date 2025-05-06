
let url = 'https://script.google.com/macros/s/AKfycbwYDILeEU3r_0HfIr4JujvRpIMRUwuGKDw3RSE70IuqPPT-oPJjPybm7wGBIjmaPGV-cg/exec';

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
function toggleOtherInput(selectElement) {
  const otherInput = document.getElementById('otherSchoolInput');
  if (selectElement.value === 'Other') {
    otherInput.style.display = 'block';
  } else {
    otherInput.style.display = 'none';
  }
}

function DateToday() {
  const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
const year = String(today.getFullYear()).slice(-2); // Extract last two digits of year

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
  
}


function otherSchoolInput(){
  const otherSchoolInut = document.getElementById('otherSchoolInput').value;
  console.log(otherSchoolInut);
  
}



function otherSchoolInput(){
  const otherSchoolInut = document.getElementById('otherSchoolInput').value;
  console.log(otherSchoolInut);
  
}