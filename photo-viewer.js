import PhotoSwipeLightbox from './vendor/photoswipe/photoswipe-lightbox.esm.min.js';

// Image links remain ordinary links until this optional viewer is available.
// Width and height describe the original photo, not its cropped thumbnail.
const galleries = document.querySelectorAll('[data-photo-gallery]');

if (galleries.length) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionOptions = () => ({
    showHideAnimationType: reducedMotion.matches ? 'none' : 'zoom',
    showAnimationDuration: reducedMotion.matches ? 0 : 240,
    hideAnimationDuration: reducedMotion.matches ? 0 : 180,
    zoomAnimationDuration: reducedMotion.matches ? 0 : 240,
  });

  const viewer = new PhotoSwipeLightbox({
    gallery: '[data-photo-gallery]',
    children: 'a[data-pswp-width][data-pswp-height]',
    pswpModule: () => import('./vendor/photoswipe/photoswipe.esm.min.js'),
    closeTitle: 'Закрыть просмотр',
    zoomTitle: 'Изменить масштаб фотографии',
    arrowPrevTitle: 'Предыдущая фотография',
    arrowNextTitle: 'Следующая фотография',
    errorMsg: 'Не удалось загрузить фотографию. Закройте просмотр и попробуйте ещё раз.',
    indexIndicatorSep: ' из ',
    trapFocus: true,
    returnFocus: true,
    escKey: true,
    arrowKeys: true,
    bgOpacity: 1,
    ...motionOptions(),
  });

  // Safari can activate an image link without focusing it. Remember the
  // actual opener while leaving modified clicks and native links untouched.
  let returnLink = null;
  galleries.forEach((gallery) => {
    gallery.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey
          || event.ctrlKey || event.altKey || event.shiftKey || viewer.pswp) return;
      const link = event.target instanceof Element
        ? event.target.closest('a[data-pswp-width][data-pswp-height]')
        : null;
      if (link && gallery.contains(link)) returnLink = link;
    });
  });

  viewer.on('destroy', () => {
    const link = returnLink;
    returnLink = null;
    // Run after PhotoSwipe's own focus restoration and DOM cleanup.
    queueMicrotask(() => {
      if (!viewer.pswp && link?.isConnected) link.focus({ preventScroll: true });
    });
  });

  // A changed system preference applies to both the next and current view.
  reducedMotion.addEventListener('change', () => {
    const options = motionOptions();
    Object.assign(viewer.options, options);
    if (viewer.pswp) Object.assign(viewer.pswp.options, options);
  });

  viewer.init();
}
