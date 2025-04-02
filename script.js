document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        window.location.href = this.getAttribute('href');
    });
});;
