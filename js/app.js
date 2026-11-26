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