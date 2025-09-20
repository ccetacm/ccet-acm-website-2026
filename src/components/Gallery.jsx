import React, { useEffect, useRef, useState } from 'react';
import styles from "./Gallery.module.css";

export default function Gallery() {
  const BREAK_DESKTOP = 950;
  const BREAK_TABLET = 700;
  const NAMES = ['one', 'two', 'three'];

  const initialImages = [
    { src: '/images/gallery/2025-acm-events/farewell.jpg', alt: 'Farewell 1', caption: 'FAREWELL' },
    { src: '/images/gallery/2025-acm-events/farewell2.jpg', alt: 'Farewell 2', caption: 'FAREWELL' },
    { src: '/images/gallery/2025-acm-events/resume%20building%20workshop.jpg', alt: 'Resume building', caption: 'RESUME BUILDING WORKSHOP' },
    { src: '/images/gallery/2025-acm-events/c++.jpg', alt: 'C/C++', caption: 'C/C++' },
    { src: '/images/gallery/2025-acm-events/dsa.jpg', alt: 'DSA', caption: 'DSA' },
    { src: '/images/gallery/2025-acm-events/js.jpg', alt: 'JavaScript', caption: 'JAVA SCRIPT' },
    { src: '/images/gallery/2025-acm-events/ML.jpg', alt: 'Machine Learning', caption: 'MACHINE LEARNING' },
    { src: '/images/gallery/2025-acm-events/wdpress1.jpg', alt: 'Wordpress 1', caption: 'WORDPRESS WORKSHOP' },
    { src: '/images/gallery/2025-acm-events/wdpress2.jpg', alt: 'Wordpress 2', caption: 'WORDPRESS WORKSHOP' },
    { src: '/images/gallery/2025-acm-events/datacom-net.jpg', alt: 'DataCom Net', caption: 'DATA COMMUNICATION & NETWORK' },
    { src: '/images/gallery/2025-acm-events/oops.jpg', alt: 'OOPS', caption: 'OOPS WORKSHOP' },
    { src: '/images/gallery/2025-acm-events/orientation.jpg', alt: 'Orientation', caption: 'ORIENTATION' }
  ];

  const galleryRef = useRef(null);
  const lightboxRef = useRef(null);
  const moRef = useRef(null);
  const resizeTimerRef = useRef(null);
  const animatorsRef = useRef([]);
  const currentStripCountRef = useRef(getStripCount());

  const [imagesData] = useState(initialImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function getStripCount() {
    const w = window.innerWidth;
    if (w >= BREAK_DESKTOP) return 3;
    if (w >= BREAK_TABLET) return 2;
    return 1;
  }

  function computeRowGap(el) {
    const cs = getComputedStyle(el);
    const raw = cs.rowGap || cs.gap || cs.getPropertyValue('gap') || '0px';
    return parseFloat(raw) || 0;
  }

  function waitForImagesInStrips(strips, timeout = 6000) {
    const imgs = [];
    strips.forEach(s => imgs.push(...Array.from(s.inner.querySelectorAll('img'))));
    if (!imgs.length) return Promise.resolve();
    imgs.forEach(img => { try { img.loading = 'eager'; } catch (e) {} });

    const promises = imgs.map(img => {
      if (img.complete && img.naturalWidth) return Promise.resolve();
      return new Promise(resolve => {
        const done = () => resolve();
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
        setTimeout(done, timeout);
      });
    });

    return Promise.all(promises);
  }

  function createAnimator(innerEl, speedPxPerSec = 40, direction = -1) {
    let y = 0, last = null, raf = null, paused = false, running = false;
    function step(ts) {
      if (!last) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;

      if (!paused) {
        y += direction * speedPxPerSec * dt;
        const first = innerEl.firstElementChild;
        if (first) {
          const firstH = first.offsetHeight;
          const rg = computeRowGap(innerEl);
          const threshold = firstH + rg;

          if (direction === -1 && Math.abs(y) >= threshold - 0.5) {
            innerEl.appendChild(first);
            y += threshold;
            if (Math.abs(y) < 0.001) y = 0;
          } else if (direction === 1 && y >= 0) {
            const lastChild = innerEl.lastElementChild;
            if (lastChild) {
              innerEl.insertBefore(lastChild, innerEl.firstElementChild);
              y -= threshold;
            }
          }
        }
        innerEl.style.transform = `translateY(${y}px)`;
      }
      raf = requestAnimationFrame(step);
    }

    function start() { if (running) return; running = true; last = null; raf = requestAnimationFrame(step); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; last = null; }
    function setPaused(v) { paused = !!v; }
    function reset() { y = 0; innerEl.style.transform = `translateY(0)`; }

    const wrapper = innerEl.closest(`.${styles.galleryStripWrapper}`) || innerEl.parentElement;
    if (wrapper) {
      wrapper.addEventListener('pointerenter', () => setPaused(true));
      wrapper.addEventListener('pointerleave', () => setPaused(false));
      wrapper.addEventListener('touchstart', () => setPaused(true), { passive: true });
      wrapper.addEventListener('touchend', () => setPaused(false), { passive: true });
    }

    return { start, stop, setPaused, reset };
  }

  function clearBuilt() {
    try { animatorsRef.current.forEach(a => a.stop && a.stop()); } catch (e) {}
    animatorsRef.current = [];
    const gal = galleryRef.current;
    if (!gal) return;
    gal.querySelectorAll(`.${styles.galleryStripWrapper}`).forEach(n => n.remove());
    gal.querySelectorAll(`.${styles.galleryStrip}`).forEach(n => n.remove());
  }

  function createStrips(count) {
    const galleryEl = galleryRef.current;
    const arr = [];
    const gapPx = 24;

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = styles.galleryStripWrapper;

      const strip = document.createElement('div');
      strip.className = styles.galleryStrip + ' ' + (NAMES[i] || '');

      const inner = document.createElement('div');
      inner.className = styles.stripInner;

      wrapper.style.flex = `0 0 calc((100% - ${(count - 1) * gapPx}px) / ${count})`;
      wrapper.style.minWidth = '0';

      strip.appendChild(inner);
      wrapper.appendChild(strip);
      galleryEl.appendChild(wrapper);

      arr.push({ wrapper, strip, inner });
    }
    return arr;
  }

  function buildAndAnimate() {
    const galleryEl = galleryRef.current;
    if (!galleryEl) return;

    const existingRootPhotos = Array.from(galleryEl.querySelectorAll(`:scope > .${styles.photo}`));
    let rootPhotos = existingRootPhotos;

    if (!rootPhotos.length) {
      rootPhotos = initialImages.map(d => {
        const photo = document.createElement('div');
        photo.className = styles.photo;

        const imageWrap = document.createElement('div');
        imageWrap.className = styles.photoImage;

        const img = document.createElement('img');
        img.setAttribute('src', d.src);
        img.setAttribute('alt', d.alt || d.caption || '');
        imageWrap.appendChild(img);

        const name = document.createElement('div');
        name.className = styles.photoName;
        name.textContent = d.caption || '';

        photo.appendChild(imageWrap);
        photo.appendChild(name);
        galleryEl.appendChild(photo);
        return photo;
      });

      rootPhotos = Array.from(galleryEl.querySelectorAll(`:scope > .${styles.photo}`));
    }

    if (!rootPhotos.length) return;

    clearBuilt();
    const stripCount = getStripCount();
    currentStripCountRef.current = stripCount;

    const strips = createStrips(stripCount);

    rootPhotos.forEach((p, i) => {
      strips[i % stripCount].inner.appendChild(p);
    });

    strips.forEach(s => {
      const cloneInner = s.inner.cloneNode(true);
      while (cloneInner.firstChild) {
        s.inner.appendChild(cloneInner.firstChild);
      }
    });

    let speeds;
    if (stripCount === 3) speeds = [42, 36, 48];
    else if (stripCount === 2) speeds = [40, 46];
    else speeds = [30];

    waitForImagesInStrips(strips, 6000).then(() => {
      animatorsRef.current = strips.map((s, idx) => {
        const sp = speeds[idx % speeds.length] || speeds[0];
        const dir = (idx === 1 ? 1 : -1);
        const animator = createAnimator(s.inner, sp, dir);
        animator.reset && animator.reset();
        animator.start && animator.start();
        return animator;
      });
    }).catch(() => {
      animatorsRef.current = strips.map((s, idx) => {
        const sp = speeds[idx % speeds.length] || speeds[0];
        const dir = (idx === 1 ? 1 : -1);
        const animator = createAnimator(s.inner, sp, dir);
        animator.reset && animator.reset();
        animator.start && animator.start();
        return animator;
      });
    });
  }

  function openLightboxAtIndex(i) {
    setLightboxIndex((i + imagesData.length) % imagesData.length);
    setLightboxOpen(true);
  }
  function closeLightbox() { setLightboxOpen(false); }
  function prevLightbox() { setLightboxIndex(idx => (idx - 1 + imagesData.length) % imagesData.length); }
  function nextLightbox() { setLightboxIndex(idx => (idx + 1) % imagesData.length); }

  function onGalleryClick(e) {
    const imgEl = e.target.closest && e.target.closest(`.${styles.photo} img`);
    if (!imgEl) return;
    const src = imgEl.getAttribute('src');
    const idx = imagesData.findIndex(d => d.src === src);
    if (idx !== -1) openLightboxAtIndex(idx);
  }

  useEffect(() => {
    const gal = galleryRef.current;
    if (!gal) return;

    gal.addEventListener('click', onGalleryClick);
    buildAndAnimate();

    const cleanupResize = (() => {
      const onResize = () => {
        clearTimeout(resizeTimerRef.current);
        resizeTimerRef.current = setTimeout(() => {
          const next = getStripCount();
          if (next !== currentStripCountRef.current) {
            const allPhotos = Array.from(document.querySelectorAll(`.${styles.photo}`));
            clearBuilt();
            allPhotos.forEach(p => galleryRef.current.appendChild(p));
            buildAndAnimate();
          } else {
            animatorsRef.current.forEach(a => { try { a.reset && a.reset(); } catch {} });
          }
        }, 140);
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    })();

    return () => {
      gal.removeEventListener('click', onGalleryClick);
      cleanupResize();
      clearBuilt();
    };
  }, []);

  useEffect(() => {
    if (lightboxOpen) document.body.classList.add('lightbox-open');
    else document.body.classList.remove('lightbox-open');
  }, [lightboxOpen]);

  return (
    <section className={styles.gallerySection} aria-label="photo gallery section">
      <h2 className={styles.galleryHeading}>GALLERY</h2>
      <p className={styles.gallerySubtitle}>Memories from ACM event & workshop</p>

      <div className={styles.gallery} ref={galleryRef} aria-label="Photo gallery"></div>

      <div
        className={`${styles.lightbox} ${lightboxOpen ? styles.lightboxActive : ''}`}
        ref={lightboxRef}
        onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}
        aria-hidden={!lightboxOpen}
      >
        <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close lightbox">×</button>
        <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); prevLightbox(); }} aria-label="Previous">‹</button>

        <div className={styles.lightboxContent} role="dialog" aria-modal="true">
          <img
            className={styles.lightboxImg}
            src={imagesData[lightboxIndex]?.src || ''}
            alt={imagesData[lightboxIndex]?.alt || ''}
          />
          <p className={styles.lightboxCaption}>{imagesData[lightboxIndex]?.caption || ''}</p>
        </div>

        <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); nextLightbox(); }} aria-label="Next">›</button>
      </div>
    </section>
  );
}
