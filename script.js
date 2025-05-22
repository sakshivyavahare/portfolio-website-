document.addEventListener('DOMContentLoaded', () => {
  // Typed.js - Typing effect
  const typed = new Typed('#element', {
    strings: ['Web Developer', 'AI Enthusiast', 'Problem Solver', 'Tech Learner'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

gsap.from('.certificate-card', {
  scrollTrigger: {
    trigger: '.certificates-container',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

  
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Intro animation
  const introTl = gsap.timeline();
  introTl
    .from('.leftsection', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.rightsection img', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7');

  // Navbar animation
  gsap.from('header nav', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  // About Section
  gsap.from('.about-content img', {
    scrollTrigger: {
      trigger: '.about-content img',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about-content p', {
    scrollTrigger: {
      trigger: '.about-content p',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  // Projects Section (cards)
  gsap.from('.box .vertical', {
    scrollTrigger: {
      trigger: '.box',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  });

  // Skills Section
  gsap.from('.skills-container .skill', {
    scrollTrigger: {
      trigger: '.skills-container',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'elastic.out(1, 0.5)'
  });

  // Contact Section
  gsap.from(['.contact-info', '.social-links', 'form'], {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Footer
  gsap.from('footer', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    duration: 1
  });
});
