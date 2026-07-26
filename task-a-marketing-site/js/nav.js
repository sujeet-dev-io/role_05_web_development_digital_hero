/**
 * NovaCraft — Navigation Controller
 * Handles mobile menu toggle, scroll-based navbar styling,
 * keyboard accessibility, and escape-key dismissal.
 */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  // ── Mobile Menu Toggle ──
  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    menu.classList.toggle('is-open', !isOpen);

    // Trap focus: move focus to first link when opening
    if (!isOpen) {
      var firstLink = menu.querySelector('.navbar__link');
      if (firstLink) firstLink.focus();
    }
  });

  // ── Close on Escape ──
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      menu.classList.remove('is-open');
      toggle.focus();
    }
  });

  // ── Close on click outside ──
  document.addEventListener('click', function (e) {
    if (
      menu.classList.contains('is-open') &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      menu.classList.remove('is-open');
    }
  });

  // ── Close on nav link click (mobile) ──
  var navLinks = menu.querySelectorAll('.navbar__link');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      if (menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        menu.classList.remove('is-open');
      }
    });
  }

  // ── Scroll-based navbar styling ──
  var navbar = document.querySelector('.navbar');
  var scrollThreshold = 50;
  var ticking = false;

  function updateNavbar() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateNavbar();
})();
