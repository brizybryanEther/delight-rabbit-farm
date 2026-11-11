// Delight Rabbit Farm - Application Logic
// All vanilla JS - no jQuery dependencies (jQuery kept for Bootstrap)
// Uses CONFIG from config.js

// Initialize WOW animations
document.addEventListener('DOMContentLoaded', function() {
    wowInit();
});

// Initialize Wow.js
function wowInit() {
    new WOW({ mobile: true }).init();
}

// WhatsApp integration - uses CONFIG.WHATSAPP_NUMBER
document.addEventListener('DOMContentLoaded', function() {
    // Import CONFIG from config.js
    const CONFIG = window.CONFIG || { whatsAppNumber: "2507XXXXX" };
    
    // Generate WhatsApp URL
    function generateWAUrl(message) {
        if (CONFIG.whatsAppNumber && CONFIG.whatsAppNumber !== "") {
            const encodedMessage = encodeURIComponent(message);
            return `https://wa.me/${CONFIG.whatsAppNumber}?text=${encodedMessage}`;
        }
        return "#";
    }
    
    // Initialize WhatsApp buttons
    function initWhatsAppButtons() {
        const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .whatsapp-float');
        
        whatsappButtons.forEach(function(btn) {
            const message = btn.getAttribute('data-message') || 'Hello Delight Rabbit Farm, I am interested in your services.';
            btn.href = generateWAUrl(message);
        });
    }
    
    // Form WhatsApp send functionality
    function initFormWhatsApp() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const phone = form.elements['phone'].value;
            const serviceInterest = form.elements['service-interest'].value;
            const message = form.elements['message'].value;
            const sendWhatsApp = form.elements['send-whatsapp'].checked;
            
            // Build the WhatsApp message
            let waMessage = `Hello Delight Rabbit Farm,\n\n`;
            waMessage += `Name: ${name}\n`;
            waMessage += `Email: ${email}\n`;
            waMessage += `Phone: ${phone}\n`;
            if (serviceInterest) {
                waMessage += `Service Interest: ${serviceInterest}\n`;
            }
            waMessage += `Message: ${message}\n`;
            
            if (sendWhatsApp && CONFIG.whatsAppNumber) {
                window.open(`https://wa.me/${CONFIG.whatsAppNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
            }
            
            // Show success message
            showFormMessage(true);
            form.reset();
        });
    }
    
    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('#stats .display-4[data-count]');
        
        if (stats.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const end = parseInt(target.getAttribute('data-count'));
                    let start = 0;
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Easing function
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(start + (end - start) * easeOut);
                        
                        target.textContent = current;
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                    
                    // Stop observing after first trigger
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(stat => observer.observe(stat));
    }
    
    // Initialize WhatsApp buttons
    initWhatsAppButtons();
    
    // Form submit handler
    initFormWhatsApp();
    
    // Stats counter animation
    animateStats();
});

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}