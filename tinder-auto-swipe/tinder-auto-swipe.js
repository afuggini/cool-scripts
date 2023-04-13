(function autoSwipe() {
  /* START CUSTOMIZING HERE */
  const RIGHT_SWIPE_RATIO = 0.8;
  const LIKE_SELECTOR = '.Bdc\\(\\$c-ds-border-gamepad-like-default\\) button';
  const NOPE_SELECTOR = '.Bdc\\(\\$c-ds-border-gamepad-nope-default\\) button';
  const LONG_PAUSE_MIN = 20000;
  const LONG_PAUSE_MAX = 30000;
  const LONG_PAUSE_AFTER_SWIPES = 50;
  const PAUSE_MIN_BETWEEN_SWIPES = 1000;
  const PAUSE_MAX_BETWEEN_SWIPES = 2000;
  /* END CUSTOMIZING HERE */

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
})();
