
// Get menu button and navigation links
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open/close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



// Get the contact form
const contactForm = document.getElementById("contactForm");

// Get input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Get error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Success message
const successMessage = document.getElementById("successMessage");


/*
    This function validates the contact form
    when the user clicks the Send Message button.
*/

contactForm.addEventListener("submit", function (event) {

    // Stop the browser from actually submitting the form
    event.preventDefault();


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    // Store whether the form is valid
    let isValid = true;


    /* --NAME VALIDATION -- */

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }
    else if (nameInput.value.trim().length < 3) {

        nameError.textContent = "Name must contain at least 3 characters.";

        isValid = false;
    }


    /* -- EMAIL VALIDATION -- */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    }
    else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    /* -- MESSAGE VALIDATION -- */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message.";

        isValid = false;

    }
    else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }

    /*enter your emailjs code*/
    if(isValid){
        emailjs.sendForm('service_rohitwel','template_rohitwel',contactForm,'Fo0cjUMGBYA72bflv')
        .then(function(){
            successMessage.textContent="message send successfully!";
            contactForm.reset();
        }, function (error){
            alert('Failed to send message. please try again.');
            console.log('email.js Error:',error);
        });
    }

});

// Get current year
const currentYear = new Date().getFullYear();

// Display current year in footer
document.getElementById("year").textContent = currentYear;