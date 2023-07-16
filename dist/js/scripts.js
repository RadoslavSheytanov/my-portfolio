// The form submission process was handled by FormSubmit.co so the below JS script is completely unnecessary. I left it for learning purposes in my future work (in university following the JS Web Track Curriculum)



// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get form values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     // var phone = document.getElementById("phone").value;
//     var message = document.getElementById("message").value;
  
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
  
//     // Prepare the request
//     xhr.open("POST", "/workspaces/startbootstrap-personal/dist/php/form-submission.php"); // Replace with the correct path to your PHP file
  
//     // Set the request headers
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
//     // Set up the request data
//     var data =
//       "name=" + encodeURIComponent(name) +
//       "&email=" + encodeURIComponent(email) +
//       "&phone=" + encodeURIComponent(phone) +
//       "&message=" + encodeURIComponent(message);
  
//     // Handle the request completion
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         // Successful form submission
//         document.getElementById("contactForm").reset();
//         alert("Form submitted successfully!"); // Replace with your desired success handling
//       } else {
//         // Error submitting the form
//         alert("Form submission failed."); // Replace with your desired error handling
//       }
//     };
  
//     // Send the request
//     xhr.send(data);
//   });
  