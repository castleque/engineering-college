
// Update the footer year automatically
document.querySelectorAll("footer p").forEach(function (copyright) {
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} Engineering College. All rights reserved.`;
});

// Contact form interaction
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const feedback = document.getElementById("contactFeedback");

        feedback.textContent = `Thank you, ${name}! Your message has been recorded in this demo.`;
        contactForm.reset();
    });
}

// Registration form interaction
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("studentName").value.trim();
        const program = document.getElementById("studentProgram").value;
        const feedback = document.getElementById("registrationFeedback");

        feedback.textContent = `Thank you, ${name}! Your interest in ${program} has been recorded in this demo.`;
        registrationForm.reset();
    });
}
