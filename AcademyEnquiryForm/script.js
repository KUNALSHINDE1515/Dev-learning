let url = 'https://script.google.com/macros/s/AKfycbwx0RcK4OzUwPV9KNOX2p-0U0HcLn96IEViMYXyxaZWL1Fwejj3fea0d9s3PlbxctxfDw/exec'

document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.target.submit.innerHTML = "Submitting"
  let formData = new FormData(this);
    fetch(url ,{
      method:"POST",
      body:formData
    }).then((res) => res.text())
    .then((finalRes) =>{ 
      e.target.submit.innerHTML = "Submit"
      console.log(finalRes)
      
    })
    
    e.preventDefault();
  });
  


