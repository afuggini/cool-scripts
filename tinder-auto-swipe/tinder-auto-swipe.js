(function autoSwipe() {
  /* START CUSTOMIZING HERE */
  const PLAY_MOTIVATION_MUSIC_IN_BG = false;
  const MUSIC_YOUTUBE_VIDEO_ID = 'PSoJvb3qEqs';
  const RIGHT_SWIPE_RATIO = 0.8;
  const LIKE_SELECTOR = '.Bdc\\(\\$c-ds-border-gamepad-like-default\\) button';
  const NOPE_SELECTOR = '.Bdc\\(\\$c-ds-border-gamepad-nope-default\\) button';
  const LONG_PAUSE_MIN = 20000;
  const LONG_PAUSE_MAX = 30000;
  const LONG_PAUSE_AFTER_SWIPES = 50;
  const PAUSE_MIN_BETWEEN_SWIPES = 1000;
  const PAUSE_MAX_BETWEEN_SWIPES = 2000;
  /* END CUSTOMIZING HERE */

  const playInBackground = (videoId) => {
    const iframe = document.createElement('iframe');
    iframe.width = 0;
    iframe.height = 0;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
    iframe.allow = 'autoplay';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);
  }  

  const getRandomTimeout = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const performSwipe = () => {
    const swipeRight = Math.random() < RIGHT_SWIPE_RATIO;
    const swipeButton = document.querySelector(swipeRight ? LIKE_SELECTOR : NOPE_SELECTOR);
    swipeButton && swipeButton.click();
  };

  let profilesSwiped = 0;

  const swipe = () => {
    performSwipe();
    profilesSwiped++;
    const isOnPause = profilesSwiped % LONG_PAUSE_AFTER_SWIPES === 0;
    setTimeout(swipe, isOnPause ? getRandomTimeout(LONG_PAUSE_MIN, LONG_PAUSE_MAX) : getRandomTimeout(PAUSE_MIN_BETWEEN_SWIPES, PAUSE_MAX_BETWEEN_SWIPES))
  };

  swipe();

  PLAY_MOTIVATION_MUSIC_IN_BG && playInBackground(MUSIC_YOUTUBE_VIDEO_ID);
})();
