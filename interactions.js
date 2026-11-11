/* Navigation and programme shortcuts. Existing contact and gallery code stay separate. */
(() => {
  'use strict';

  const menu = document.querySelector('#mobile-menu');
  const menuButton = document.querySelector('#menu-open');
  const contactDialog = document.querySelector('#contact-dialog');
  const stickyAction = document.querySelector('.mobile-cta');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let menuReturnFocus = null;
  let menuDestination = null;

  function anchorTarget(link) {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#' || !hash.startsWith('#')) return null;
    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
      return null;
    }
  }

  function isPlainClick(event) {
    return !event.defaultPrevented && event.button === 0 &&
      !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey;
  }

  function focusWithoutScrolling(element) {
    if (!element) return;
    const needsTabIndex = !element.matches('a[href], button, input, select, textarea, summary, [tabindex]');
    if (needsTabIndex) {
      element.setAttribute('tabindex', '-1');
      element.addEventListener('blur', () => element.removeAttribute('tabindex'), { once: true });
    }
    element.focus({ preventScroll: true });
  }

  function visitSection(target, hash) {
    // pushState records the destination without triggering a second anchor scroll.
    if (window.location.hash !== hash) {
      try {
        window.history.pushState(null, '', hash);
      } catch {
        // Navigation still works when history access is restricted in a preview.
      }
    }
    target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  }

  const primaryActions = [...document.querySelectorAll('.hero .btn[data-contact], .final .btn[data-contact]')];
  const actionVisibility = new Map(primaryActions.map(action => [action, false]));

  function updateStickyAction() {
    if (!stickyAction) return;
    const dialogOpen = Boolean(menu?.open || contactDialog?.open);
    const primaryVisible = [...actionVisibility.values()].some(Boolean);
    stickyAction.hidden = dialogOpen || primaryVisible;
  }

  function syncMenuState() {
    menuButton?.setAttribute('aria-expanded', String(Boolean(menu?.open)));
    updateStickyAction();
  }

  if (menu && menuButton && typeof menu.showModal === 'function') {
    menuButton.hidden = false;
    menuButton.setAttribute('aria-controls', menu.id);
    syncMenuState();

    menuButton.addEventListener('click', () => {
      if (menu.open) return;
      menuReturnFocus = document.activeElement;
      menuDestination = null;
      menu.showModal();
      syncMenuState();
      focusWithoutScrolling(menu.querySelector('[data-menu-close]'));
    });

    menu.querySelectorAll('[data-menu-close]').forEach(button => {
      button.addEventListener('click', () => menu.close());
    });

    menu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        if (!isPlainClick(event)) return;
        const target = anchorTarget(link);
        if (!target) return;
        event.preventDefault();
        menuDestination = target.querySelector('h1, h2, h3') || target;
        // The native close event handles focus after its built-in restoration.
        menu.close();
        visitSection(target, link.getAttribute('href'));
      });
    });

    menu.addEventListener('close', () => {
      syncMenuState();
      const destination = menuDestination;
      menuDestination = null;
      focusWithoutScrolling(destination || (menuReturnFocus?.isConnected ? menuReturnFocus : menuButton));
    });
    // Escape keeps the dialog's native cancellation and focus-trapping behaviour.
    menu.addEventListener('cancel', syncMenuState);
  }

  document.querySelectorAll('.hero-steps a[data-day]').forEach(link => {
    link.addEventListener('click', event => {
      if (!isPlainClick(event)) return;
      const day = anchorTarget(link);
      if (!day || day.tagName !== 'DETAILS') return;
      event.preventDefault();
      day.open = true;
      visitSection(day, link.getAttribute('href'));
      focusWithoutScrolling(day.querySelector('summary'));
    });
  });

  if (stickyAction && 'IntersectionObserver' in window) {
    const actionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => actionVisibility.set(entry.target, entry.isIntersecting && entry.intersectionRatio > 0));
      updateStickyAction();
    }, { threshold: [0, 0.01] });
    primaryActions.forEach(action => {
      const bounds = action.getBoundingClientRect();
      actionVisibility.set(action, bounds.width > 0 && bounds.height > 0 &&
        bounds.bottom > 0 && bounds.top < window.innerHeight &&
        bounds.right > 0 && bounds.left < window.innerWidth);
      actionObserver.observe(action);
    });
  }

  [menu, contactDialog].filter(Boolean).forEach(dialog => {
    dialog.addEventListener('close', syncMenuState);
    dialog.addEventListener('toggle', syncMenuState);
    if ('MutationObserver' in window) {
      new MutationObserver(syncMenuState).observe(dialog, { attributes: true, attributeFilter: ['open'] });
    }
  });
  updateStickyAction();

  const navItems = [...document.querySelectorAll('header nav a[data-nav]')]
    .map(link => ({ link, section: anchorTarget(link) }))
    .filter(item => item.section);

  function updateCurrentSection() {
    const readingLine = window.innerHeight * 0.3;
    let currentSection = null;
    let closestTop = -Infinity;
    navItems.forEach(({ section }) => {
      const top = section.getBoundingClientRect().top;
      if (top <= readingLine && top > closestTop) {
        currentSection = section;
        closestTop = top;
      }
    });
    navItems.forEach(({ link, section }) => {
      if (section === currentSection) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  if (navItems.length && 'IntersectionObserver' in window) {
    let sectionObserver;
    function observeReadingLine() {
      sectionObserver?.disconnect();
      const line = Math.round(window.innerHeight * 0.3);
      // Pixel margins keep the line tied to viewport height, even on wide screens.
      sectionObserver = new IntersectionObserver(updateCurrentSection, {
        rootMargin: `-${line}px 0px -${Math.max(0, window.innerHeight - line - 1)}px 0px`,
        threshold: 0
      });
      [...new Set(navItems.map(item => item.section))].forEach(section => sectionObserver.observe(section));
      updateCurrentSection();
    }
    observeReadingLine();
    window.addEventListener('resize', observeReadingLine, { passive: true });
    window.addEventListener('hashchange', updateCurrentSection);
  }
})();
