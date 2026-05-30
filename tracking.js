document.addEventListener("DOMContentLoaded", function() {
    // Check if gtag is defined
    if (typeof gtag !== 'function') {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);}
    }

    // 1. Track WhatsApp Clicks
    const waLinks = document.querySelectorAll('a[href*="wa.me"]');
    waLinks.forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'Engagement',
                'event_label': 'WhatsApp Click',
                'value': 1
            });
        });
    });

    // 2. Track Phone Clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'Engagement',
                'event_label': 'Phone Call Click',
                'value': 1
            });
        });
    });

    // 3. Track Form Submissions (Consultation / General Form)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            // Wait a tiny bit to ensure validation passes before sending event
            gtag('event', 'submit', {
                'event_category': 'Lead',
                'event_label': 'Form Submission',
                'value': 1
            });
            
            // Specifically track consultation if it's the main contact form
            if (form.closest('#form-section') || window.location.pathname.includes('contact')) {
                gtag('event', 'generate_lead', {
                    'event_category': 'Lead',
                    'event_label': 'Consultation Booking'
                });
            }
        });
    });

    // 4. Track Consultation Bookings (Clicking on 'Book Free Consultation' buttons)
    const bookLinks = document.querySelectorAll('a[href*="contact.html"]');
    bookLinks.forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'Engagement',
                'event_label': 'Book Consultation Button Click'
            });
        });
    });
});
