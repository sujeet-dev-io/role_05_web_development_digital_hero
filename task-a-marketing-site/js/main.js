/**
 * NovaCraft — Main Script
 * Handles scroll reveal animations (IntersectionObserver),
 * billing toggle on pricing page, and contact form validation.
 */
(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // SCROLL REVEAL (IntersectionObserver)
  // ═══════════════════════════════════════════════════════════
  if ('IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add('is-visible');
            observer.unobserve(entries[i].target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    for (var i = 0; i < revealElements.length; i++) {
      observer.observe(revealElements[i]);
    }
  } else {
    // Fallback: show all immediately
    var fallbacks = document.querySelectorAll('.reveal');
    for (var j = 0; j < fallbacks.length; j++) {
      fallbacks[j].classList.add('is-visible');
    }
  }


  // ═══════════════════════════════════════════════════════════
  // BILLING TOGGLE (Pricing Page)
  // ═══════════════════════════════════════════════════════════
  var billingToggle = document.getElementById('billing-toggle');
  if (billingToggle) {
    var monthlyLabel = document.getElementById('toggle-monthly');
    var annualLabel = document.getElementById('toggle-annual');
    var priceAmounts = document.querySelectorAll('.pricing-card__amount');

    billingToggle.addEventListener('click', function () {
      var isAnnual = billingToggle.getAttribute('aria-checked') === 'true';
      var newState = !isAnnual;

      billingToggle.setAttribute('aria-checked', String(newState));

      // Toggle active label styles
      if (newState) {
        monthlyLabel.classList.remove('pricing-toggle__label--active');
        annualLabel.classList.add('pricing-toggle__label--active');
      } else {
        monthlyLabel.classList.add('pricing-toggle__label--active');
        annualLabel.classList.remove('pricing-toggle__label--active');
      }

      // Update prices
      for (var k = 0; k < priceAmounts.length; k++) {
        var el = priceAmounts[k];
        el.textContent = newState ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
      }
    });

    // Keyboard support
    billingToggle.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        billingToggle.click();
      }
    });
  }


  // ═══════════════════════════════════════════════════════════
  // CONTACT FORM VALIDATION
  // ═══════════════════════════════════════════════════════════
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var fields = [
        { id: 'first-name', validator: function (v) { return v.trim().length > 0; } },
        { id: 'last-name',  validator: function (v) { return v.trim().length > 0; } },
        { id: 'email',      validator: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
        { id: 'subject',    validator: function (v) { return v.length > 0; } },
        { id: 'message',    validator: function (v) { return v.trim().length > 0; } }
      ];

      for (var m = 0; m < fields.length; m++) {
        var field = fields[m];
        var input = document.getElementById(field.id);
        var group = input.closest('.form-group');

        if (!field.validator(input.value)) {
          group.classList.add('has-error');
          if (isValid) input.focus(); // Focus first invalid field
          isValid = false;
        } else {
          group.classList.remove('has-error');
        }
      }

      if (isValid) {
        // Simulate form submission
        contactForm.style.display = 'none';
        formSuccess.classList.add('is-visible');
      }
    });

    // Clear error on input
    var formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    for (var n = 0; n < formInputs.length; n++) {
      formInputs[n].addEventListener('input', function () {
        this.closest('.form-group').classList.remove('has-error');
      });
    }
  }
})();
