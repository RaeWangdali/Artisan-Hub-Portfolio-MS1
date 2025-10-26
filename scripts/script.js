// Wait for the entire document (HTML) to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Functionality (DOM Manipulation & Event Handling)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    /**
     * Toggles the 'active' class on the navigation menu to show/hide it on mobile.
     */
    function toggleMenu() {
        // Toggles the CSS class 'active' to show/hide the menu
        mainNav.classList.toggle('active'); 
        const isExpanded = mainNav.classList.contains('active');
        // Update ARIA attribute for accessibility
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }

    // Attach a click event listener to the menu button
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }


    // 2. Dynamic Skill Highlighter (Event Handling)
    const skillItems = document.querySelectorAll('.skills-list li');

    /**
     * Toggles the 'highlight' class on a skill item when clicked.
     * The visual change is handled by the CSS.
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


    // 3. Simple Contact Form Validation (Functions & Event Handling)
    const contactForm = document.querySelector('.contact-form');

    /**
     * Checks if the Name and Email fields are filled out.
     * Prevents form submission if validation fails and logs status to console.
     */
    function validateForm(event) {
        event.preventDefault(); // Stops the default form submission (refreshing the page)

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameValue = nameInput ? nameInput.value.trim() : '';
        const emailValue = emailInput ? emailInput.value.trim() : '';
        
        // Reset borders visually
        nameInput.style.border = '1px solid #ccc';
        emailInput.style.border = '1px solid #ccc';


        if (nameValue === '' || emailValue === '') {
            console.error("Validation Failed: Please fill out the Name and Email fields.");
            
            // Highlight fields with a red border if they are empty
            if (nameValue === '') nameInput.style.border = '2px solid red';
            if (emailValue === '') emailInput.style.border = '2px solid red';

        } else {
            console.log("Form Validation Success! (Data logged to console)");
            console.log("Name:", nameValue);
            console.log("Email:", emailValue);
            console.log("Message:", messageInput ? messageInput.value.trim() : '');

            // For this example, we clear the form to simulate success
            contactForm.reset(); 
            nameInput.style.border = '1px solid #ccc';
            emailInput.style.border = '1px solid #ccc';
        }
    }

    // Attach the 'submit' event listener to the contact form
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});