// Navigation bar effect on scroll 
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Service Modal 
const serviceModals = document.querySelectorAll('.service_modal');
const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Scroll to top 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Dark-Light theme 
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Contact Page 
document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init('WggcDg1sEfqJmb_9Q'); // Replace 'YOUR_PUBLIC_KEY' with your actual Public Key from EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        event.target.reset();

        // Collect form data
        var formData = {
            from_name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            // subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        // Send email
        emailjs.send('service_hjvcfjm', 'template_cagl21f', formData)
            .then(function(response) {
                alert('SUCCESS! Your message has been sent.');
            }, function(error) {
                alert('FAILED! Please try again.');
            });
    });
});


  


