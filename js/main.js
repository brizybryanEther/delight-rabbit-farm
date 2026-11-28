(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        // Keep the logo visible while the page loads, then hide the overlay.
        // Use the window load event to ensure all resources are ready.
        $(window).on('load', function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        });
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Make menu disappear when scrolling
    var navbar = $('.navbar');
    function checkNavbarScroll() {
        if ($(window).scrollTop() > 50) {
            navbar.addClass('navbar--hidden');
            if ($('#navbarCollapse').hasClass('show')) {
                $('#navbarCollapse').collapse('hide');
            }
        } else {
            navbar.removeClass('navbar--hidden');
        }
    }
    $(window).scroll(checkNavbarScroll);
    checkNavbarScroll();

    // Contact Form — Formspree submission
    var contactForm = document.getElementById('contact-form');
    if (contactForm && contactForm.tagName === 'FORM') {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Bootstrap validation
            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }

            var submitBtn = contactForm.querySelector('[type="submit"]');
            var originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
            var successMsg = document.getElementById('form-success');
            var errorMsg = document.getElementById('form-error');

            if (!successMsg) {
                successMsg = document.createElement('div');
                successMsg.id = 'form-success';
                successMsg.className = 'alert alert-success mt-3 d-none';
                successMsg.setAttribute('role', 'alert');
                successMsg.textContent = 'Thank you! Your message has been sent. We will contact you shortly.';
                contactForm.appendChild(successMsg);
            }
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.id = 'form-error';
                errorMsg.className = 'alert alert-danger mt-3 d-none';
                errorMsg.setAttribute('role', 'alert');
                errorMsg.textContent = 'Something went wrong. Please try again.';
                contactForm.appendChild(errorMsg);
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending…';
            }

            var formData = new FormData(contactForm);

            fetch('https://formspree.io/f/meagdpae', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(function (response) {
                if (response.ok) {
                    successMsg.classList.remove('d-none');
                    errorMsg.classList.add('d-none');

                    // Also open WhatsApp if checkbox was ticked
                    if (formData.get('send-whatsapp') === 'on') {
                        var waNumber = (window.CONFIG && window.CONFIG.whatsAppNumber) ? window.CONFIG.whatsAppNumber : '250788448889';
                        var name = formData.get('name') || '';
                        var service = formData.get('service-interest') || document.title || '';
                        var msg = formData.get('message') || '';
                        var text = encodeURIComponent(
                            'Hi Delight Rabbit Farm,\n' +
                            'Name: ' + name + '\n' +
                            'Service: ' + service + '\n' +
                            'Message: ' + msg
                        );
                        window.open('https://wa.me/' + waNumber + '?text=' + text, '_blank');
                    }

                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                } else {
                    errorMsg.classList.remove('d-none');
                    successMsg.classList.add('d-none');
                }
            })
            .catch(function () {
                errorMsg.classList.remove('d-none');
                successMsg.classList.add('d-none');
            })
            .finally(function () {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                }
            });
        });
    }

    // Gallery Lightbox — open photos individually on click
    var galleryImages = Array.prototype.slice.call(document.querySelectorAll('#gallery-grid .gallery-item img'));
    if (galleryImages.length > 0) {
        var currentIdx = 0;
        var modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Gallery image viewer');
        modal.innerHTML =
            '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>' +
            '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous">&#8249;</button>' +
            '<img src="" alt="">' +
            '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next">&#8250;</button>' +
            '<div class="lightbox-caption"></div>';
        document.body.appendChild(modal);

        var modalImg = modal.querySelector('img');
        var modalCaption = modal.querySelector('.lightbox-caption');
        var closeBtn = modal.querySelector('.lightbox-close');
        var prevBtn = modal.querySelector('.lightbox-prev');
        var nextBtn = modal.querySelector('.lightbox-next');

        function showImage(index) {
            currentIdx = (index + galleryImages.length) % galleryImages.length;
            var target = galleryImages[currentIdx];
            modalImg.src = target.getAttribute('src');
            modalImg.alt = target.getAttribute('alt') || '';
            modalCaption.textContent = target.getAttribute('alt') || '';
        }

        function openLightbox(index) {
            showImage(index);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        galleryImages.forEach(function (img, idx) {
            img.addEventListener('click', function () {
                openLightbox(idx);
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            showImage(currentIdx - 1);
        });
        nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            showImage(currentIdx + 1);
        });
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentIdx - 1);
            if (e.key === 'ArrowRight') showImage(currentIdx + 1);
        });
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow').css('display', 'flex');
        } else {
            $('.back-to-top').fadeOut('slow').css('display', 'none');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);