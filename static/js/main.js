/* Elite Homes — main.js
   Scroll reveal + performance utilities
*/

(function () {
  'use strict';

  /* ── Scroll Reveal ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  function initReveal() {
    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  /* ── Lazy-load background images ── */
  function initLazyBg() {
    const bgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const src = el.dataset.bg;
            if (src) {
              el.style.backgroundImage = "url('" + src + "')";
              el.removeAttribute('data-bg');
            }
            bgObserver.unobserve(el);
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    document.querySelectorAll('[data-bg]').forEach((el) => {
      bgObserver.observe(el);
    });
  }

  /* ── Header scroll state ── */
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Image decode acceleration ── */
  function initImageDecode() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.decoding = 'async';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      initLazyBg();
      initHeaderScroll();
      initImageDecode();
    });
  } else {
    initReveal();
    initLazyBg();
    initHeaderScroll();
    initImageDecode();
  }
})();
