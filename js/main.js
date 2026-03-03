'use strict';

// Navbar scroll effect
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

// Highlight active nav link based on scroll position
const initActiveNavLinks = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a:not(.mobile-cta)');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
};

// Mobile menu toggle
const initMobileMenu = () => {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar     = document.getElementById('navbar');
  if (!hamburger || !mobileMenu) return;

  const closeMobile = () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  const toggleMobile = () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', e => { e.stopPropagation(); toggleMobile(); });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobile));

  document.addEventListener('click', e => {
    if (mobileMenu.classList.contains('open') && !navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobile();
    }
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });
  window.closeMobile = closeMobile;
};

// Animated particles in hero section
const initParticles = () => {
  const field = document.getElementById('particleField');
  if (!field) return;

  const COLORS = ['#f5a623', '#1aff8c', '#c8860a', '#d4c5a9', '#ff9f1c'];
  const COUNT  = window.innerWidth < 600 ? 18 : 40;

  for (let i = 0; i < COUNT; i++) {
    const p    = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const col  = COLORS[Math.floor(Math.random() * COLORS.length)];

    p.classList.add('pdot');
    p.style.cssText = `
      width:${size}px;height:${size}px;background:${col};
      left:${Math.random() * 100}%;
      animation-duration:${10 + Math.random() * 14}s;
      animation-delay:${-(Math.random() * 25)}s;
      --dx:${(Math.random() - 0.5) * 160}px;
      box-shadow:0 0 ${size * 3}px ${col};
    `;
    field.appendChild(p);
  }
};

// Fade-in elements as they enter viewport
const initScrollReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  elements.forEach(el => observer.observe(el));
};

// Smooth scroll with navbar offset
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('navbar')?.offsetHeight ?? 68;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNavLinks();
  initMobileMenu();
  initParticles();
  initScrollReveal();
  initSmoothScroll();

  console.log('%c$EXTINCT | The Extinct Club', 'color: #f5a623; font-family: monospace; font-size: 14px;');
  console.log('%cLazarus Signal Active — Phase 0', 'color: #1aff8c; font-family: monospace; font-size: 11px;');
});
