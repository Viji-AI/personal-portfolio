document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here you can add code to send the form data to a server if needed
        // For now, we'll just reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        window.location.href = this.getAttribute('href');
    });
});;
