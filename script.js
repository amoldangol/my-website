document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const responseDiv = document.getElementById('form-response');
    
    responseDiv.textContent = `Thank you, ${name}! Your message has been "deployed" successfully. I will get back to you at ${email}.`;
    responseDiv.classList.remove('hidden');

    document.getElementById('contact-form').reset();
});