// Wait for the entire document (HTML) to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Skill Highlighter (Event Handling)
    // Select all <li> items inside the skills-list
    const skillItems = document.querySelectorAll('.skills-list li');

    /**
     * Toggles the 'highlight' class on a skill item when clicked.
     * The visual change is handled by the custom CSS in style.css.
     */
    function highlightSkill(event) {
        const item = event.target;
        // Toggles the 'highlight' class defined in style.css
        item.classList.toggle('highlight'); 
    }

    // Attach a click event listener to every skill list item
    skillItems.forEach(item => {
        item.addEventListener('click', highlightSkill);
    });


    // 2. Simple Contact Form Validation (Functions & Event Handling)
    // Select the form element
    const contactForm = document.querySelector('.contact-form');

    /**
     * Checks if the Name and Email fields are filled out.
     * Prevents form submission if validation fails and logs status to console.
     */
    function validateForm(event) {
        // Prevents the default HTML form submission (page refresh)
        event.preventDefault(); 

        // Use querySelector for elements now styled with Bootstrap
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameValue = nameInput ? nameInput.value.trim() : '';
        const emailValue = emailInput ? emailInput.value.trim() : '';
        
        // Reset borders visually (important when using custom JS validation)
        nameInput.style.border = '1px solid #ced4da'; // Bootstrap's default border color
        emailInput.style.border = '1px solid #ced4da';

        if (nameValue === '' || emailValue === '') {
            // Log failure to the browser console
            console.error("Validation Failed: Please fill out the Name and Email fields.");
            
            // Highlight fields with a red border if they are empty
            if (nameValue === '') nameInput.style.border = '2px solid red';
            if (emailValue === '') emailInput.style.border = '2px solid red';

        } else {
            // Log success to the browser console
            console.log("Form Validation Success! (Data logged to console)");
            console.log("Name:", nameValue);
            console.log("Email:", emailValue);
            console.log("Message:", messageInput ? messageInput.value.trim() : '');

            // Simulate form submission success by clearing the form
            contactForm.reset(); 
            // Optional: Show a success message to the user (not required for this milestone)
        }
    }

    // Attach the 'submit' event listener to the contact form
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});
