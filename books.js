(() => {
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  const moodButtons = [...document.querySelectorAll('[data-mood]')];
  const rooms = [...document.querySelectorAll('[data-moods]')];
  const result = document.querySelector('[data-mood-result]');
  const textarea = document.querySelector('textarea[name="work"]');
  const count = document.querySelector('[data-count]');
  const formStatus = document.querySelector('[data-form-status]');

  const moodMessages = {
    all: 'Showing every room in the library.',
    wonder: 'The curious shelves have moved closer.',
    learn: 'Opening the shelves built for difficult questions.',
    seen: 'Finding voices that may sound a little like yours.',
    brave: 'Stories of trying, failing and beginning again.',
    quiet: 'A quieter corner has been saved for you.'
  };

  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('open', !open);
  });

  nav?.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    menu?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });

  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.dataset.mood;
      moodButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      let firstMatch;
      rooms.forEach(room => {
        const matches = mood === 'all' || room.dataset.moods.split(' ').includes(mood);
        room.classList.toggle('filtered-out', !matches);
        if (matches && !firstMatch) firstMatch = room;
      });

      if (result) result.textContent = moodMessages[mood];
      firstMatch?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    });
  });

  if (textarea && count) {
    const updateCount = () => { count.textContent = textarea.value.length.toLocaleString(); };
    textarea.addEventListener('input', updateCount);
    updateCount();
  }

  if (new URLSearchParams(window.location.search).get('submitted') === 'true' && formStatus) {
    formStatus.textContent = 'Your words have reached the library. Thank you for trusting us with them.';
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
  } else {
    document.querySelectorAll('.reveal').forEach(node => node.classList.add('visible'));
  }
})();
