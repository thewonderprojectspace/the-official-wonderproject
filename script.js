(() => {
  const canvas = document.querySelector('#livingSky');
  const ctx = canvas?.getContext('2d');
  const header = document.querySelector('#siteHeader');
  const menuButton = document.querySelector('#menuButton');
  const menu = document.querySelector('#siteMenu');
  const planetStage = document.querySelector('#planetStage');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stars = [];
  let frame = 0;

  document.querySelectorAll('.js-brand-logo').forEach(logo => {
    const showFallback = () => logo.classList.add('logo-missing');
    logo.addEventListener('error', showFallback, { once: true });
    if (logo.complete && logo.naturalWidth === 0) showFallback();
  });

  function resizeSky() {
    if (!canvas || !ctx) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * ratio);
    canvas.height = Math.floor(innerHeight * ratio);
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(80, Math.floor((innerWidth * innerHeight) / 9500));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.25 + .15,
      a: Math.random() * .55 + .12,
      speed: Math.random() * .008 + .002,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function drawSky(time = 0) {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const wash = ctx.createRadialGradient(innerWidth * .76, innerHeight * .48, 0, innerWidth * .76, innerHeight * .48, innerWidth * .7);
    wash.addColorStop(0, 'rgba(44, 28, 66, .16)');
    wash.addColorStop(.5, 'rgba(10, 8, 18, .08)');
    wash.addColorStop(1, 'rgba(3, 3, 7, 1)');
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    stars.forEach(star => {
      const pulse = reduceMotion ? 1 : .68 + Math.sin(time * star.speed + star.phase) * .32;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(235, 229, 222, ${star.a * pulse})`;
      ctx.fill();
    });
    if (!reduceMotion) frame = requestAnimationFrame(drawSky);
  }

  function toggleMenu(force) {
    if (!menuButton || !menu) return;
    const open = typeof force === 'boolean' ? force : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuButton?.addEventListener('click', () => toggleMenu());
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') toggleMenu(false);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', scrollY > 30);
  }, { passive: true });

  if (!reduceMotion && planetStage) {
    window.addEventListener('pointermove', event => {
      const x = (event.clientX / innerWidth - .5) * 12;
      const y = (event.clientY / innerHeight - .5) * 10;
      planetStage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });
  }

  resizeSky();
  drawSky();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(frame);
    resizeSky();
    drawSky();
  }, { passive: true });
})();
