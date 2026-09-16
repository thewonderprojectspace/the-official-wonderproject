(() => {
  document.documentElement.classList.add('js-ready');

  const canvas = document.querySelector('#cosmicSky');
  const context = canvas?.getContext('2d');
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('#scrollProgress');
  const menuToggle = document.querySelector('#menu-toggle');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dockLinks = [...document.querySelectorAll('.journey-dock a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  let stars = [];
  let animationFrame = 0;

  function sizeSky() {
    if (!canvas || !context) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * ratio);
    canvas.height = Math.floor(innerHeight * ratio);
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const total = Math.max(90, Math.floor((innerWidth * innerHeight) / 8500));
    stars = Array.from({ length: total }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      radius: Math.random() * 1.25 + .15,
      alpha: Math.random() * .58 + .12,
      speed: Math.random() * .006 + .002,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function paintSky(time = 0) {
    if (!canvas || !context) return;
    context.clearRect(0, 0, innerWidth, innerHeight);

    const glow = context.createRadialGradient(innerWidth * .72, innerHeight * .45, 0, innerWidth * .72, innerHeight * .45, innerWidth * .75);
    glow.addColorStop(0, 'rgba(74, 39, 126, .18)');
    glow.addColorStop(.45, 'rgba(20, 10, 42, .1)');
    glow.addColorStop(1, 'rgba(4, 2, 10, 1)');
    context.fillStyle = glow;
    context.fillRect(0, 0, innerWidth, innerHeight);

    stars.forEach(star => {
      const pulse = reduceMotion ? 1 : .72 + Math.sin(time * star.speed + star.phase) * .28;
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(239, 231, 255, ${star.alpha * pulse})`;
      context.fill();
    });

    if (!reduceMotion) animationFrame = requestAnimationFrame(paintSky);
  }

  function updateScrollState() {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const amount = scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0;
    if (progress) progress.style.width = `${amount * 100}%`;
    header?.classList.toggle('scrolled', scrollY > 28);

    let current = 'top';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= innerHeight * .42) current = section.id;
    });
    dockLinks.forEach(link => link.classList.toggle('active', link.dataset.section === current));
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });

  document.querySelectorAll('main section:not(.hero)').forEach(section => revealObserver.observe(section));
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
    if (menuToggle) menuToggle.checked = false;
  }));

  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrame);
    sizeSky();
    paintSky();
    updateScrollState();
  }, { passive: true });

  sizeSky();
  paintSky();
  updateScrollState();
})();
