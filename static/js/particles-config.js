// Lightweight particles configuration
// Scripts with defer execute in order after DOM parsing
(function initParticles() {
  if (typeof particlesJS === 'undefined') {
    // Retry briefly if particles.js hasn't loaded yet
    setTimeout(initParticles, 50);
    return;
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 35,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  });
})();
