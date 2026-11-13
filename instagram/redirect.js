(() => {
  'use strict';

  const userAgent = navigator.userAgent || '';
  // Link preview crawlers should see the page, not register a tracking click.
  if (/bot|crawler|spider|facebookexternalhit|facebot|meta-external/i.test(userAgent)) return;

  let platform;
  if (/Android/i.test(userAgent)) {
    platform = 'android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1)) {
    // iPadOS can identify itself as a Mac when requesting a desktop website.
    platform = 'ios';
  } else {
    return;
  }

  const store = document.getElementById(`download-${platform}`);
  const status = document.getElementById('download-status');
  if (!store) return;

  status.textContent = 'Opening your app store… You can also use the buttons below.';
  try {
    // Replace avoids sending the Back button through this redirect again.
    // Navigate through AppMetrica unchanged so it can pass its install referrer.
    window.location.replace(store.href);
  } catch {
    status.textContent = 'Choose your app store below.';
  }
})();
