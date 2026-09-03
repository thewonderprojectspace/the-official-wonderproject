const canvas = document.querySelector('.living-sky');
const ctx = canvas.getContext('2d');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let frame = 0, width = 0, height = 0, pointer = { x: -999, y: -999 };
const stars = Array.from({ length: 110 }, (_, i) => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.25 + .25, drift: (Math.random() - .5) * .00008, pulse: Math.random() * Math.PI * 2, gold: i % 13 === 0 }));
function resizeSky(){ const dpr = Math.min(devicePixelRatio || 1, 2); width = innerWidth; height = innerHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
function drawSky(time = 0){ ctx.clearRect(0, 0, width, height); stars.forEach(star => { if(!reduceMotion) star.x = (star.x + star.drift + 1) % 1; const x = star.x * width, y = star.y * height, distance = Math.hypot(pointer.x - x, pointer.y - y), glow = distance < 120 ? 1 - distance / 120 : 0, alpha = .28 + (Math.sin(time * .0015 + star.pulse) + 1) * .18 + glow * .55; ctx.beginPath(); ctx.arc(x, y, star.r + glow * 1.5, 0, Math.PI * 2); ctx.fillStyle = star.gold ? `rgba(255,215,74,${alpha})` : `rgba(238,244,255,${alpha})`; ctx.fill(); }); if(!reduceMotion) frame = requestAnimationFrame(drawSky); }
resizeSky(); drawSky(); addEventListener('resize', resizeSky); addEventListener('pointermove', e => pointer = { x: e.clientX, y: e.clientY }, { passive:true });
const menuButton = document.querySelector('#menuButton'); const siteMenu = document.querySelector('#siteMenu');
function closeMenu(){ siteMenu.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); menuButton.querySelector('span').textContent='MENU'; }
menuButton.addEventListener('click', () => { const open = siteMenu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.querySelector('span').textContent = open ? 'CLOSE' : 'MENU'; }); siteMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); } }), { threshold:.12 }); document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
document.querySelector('.brand-orbit img')?.addEventListener('error', e => e.currentTarget.remove());

