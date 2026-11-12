// Explicitly enabled participation/contact events for Meta Pixel 997653370089469.
// Only action names are passed to Meta. No quiz answers or DOM text are read.
(() => {
  'use strict';
  if (window.__moyaMetaEventsReady) return;
  window.__moyaMetaEventsReady = true;

  const send = name => {
    if (typeof window.fbq !== 'function') return;
    try {
      window.fbq('trackSingleCustom', '997653370089469', name);
    } catch {
      // Analytics must not interrupt contact links or the participation dialog.
    }
  };

  document.addEventListener('click', event => {
    if (!event.isTrusted || event.defaultPrevented || !(event.target instanceof Element)) return;

    const phone = event.target.closest('a[href^="tel:"]');
    if (phone) {
      send('PhoneClick');
      return;
    }

    const action = event.target.closest('[data-contact]');
    if (action && document.querySelector('#contact-dialog')?.open) {
      send('ContactOptionsOpen');
    }
  });
})();
