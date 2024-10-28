// analytics.js
(function() {
  var gtagScript = document.createElement('script');
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-MWT1X4KCMM';
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-MWT1X4KCMM');

  // Track MP3 play events
  document.addEventListener('DOMContentLoaded', function() {
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
      audio.addEventListener('play', function() {
        gtag('event', 'play', {
          'event_category': 'Audio',
          'event_label': audio.currentSrc
        });
      });
    });
  });
})();
