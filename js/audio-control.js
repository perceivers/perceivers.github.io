document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll("audio");
  
  audioElements.forEach((audio, index) => {
    new MediaElementPlayer(audio, {
      features: ['playpause', 'current', 'progress', 'duration', 'volume'],
      startVolume: 0.8,
      success: function (mediaElement) {
        // 暂停其他播放器
        mediaElement.addEventListener("play", function () {
          audioElements.forEach((otherAudio) => {
            if (otherAudio !== audio) {
              otherAudio.pause();
            }
          });
        });
      }
    });
  });
});
