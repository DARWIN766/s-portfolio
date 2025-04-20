// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
document.querySelector('.nav-links').classList.toggle('active');
});

// Form Submission with Formspree
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.textContent = "Message sent successfully! 🚀";
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.textContent = "Oops! Something went wrong. Please try again.";
    }
});