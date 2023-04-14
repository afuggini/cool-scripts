# Tinder Auto Swipe

A simple JavaScript script to automate swiping on the Tinder web interface. This script will swipe right or left randomly based on the configured swipe ratio. It also includes optional background motivational music.

## Features

- Customizable swipe ratio
- Pause between swipes
- Long pause after a set number of swipes
- Optional background motivational music

## Usage

1. Open the Tinder website (https://tinder.com) and log in.
2. Press `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Opt + J` (Mac) to open the developer console.
3. Copy and paste the entire script into the console.
4. Press `Enter` to start the auto-swipe process.

## Customization

You can customize the script by modifying the values in the "START CUSTOMIZING HERE" section:

- `PLAY_MOTIVATION_MUSIC_IN_BG`: Set to `true` to enable background motivational music or `false` to disable it.
- `MUSIC_YOUTUBE_VIDEO_ID`: The YouTube video ID for the motivational music.
- `RIGHT_SWIPE_RATIO`: The ratio of right swipes (between 0 and 1).
- `LIKE_SELECTOR`: The CSS selector for the "Like" button.
- `NOPE_SELECTOR`: The CSS selector for the "Nope" button.
- `LONG_PAUSE_MIN`: The minimum duration (in milliseconds) for the long pause after a set number of swipes.
- `LONG_PAUSE_MAX`: The maximum duration (in milliseconds) for the long pause after a set number of swipes.
- `LONG_PAUSE_AFTER_SWIPES`: The number of swipes after which a long pause occurs.
- `PAUSE_MIN_BETWEEN_SWIPES`: The minimum duration (in milliseconds) for the pause between swipes.
- `PAUSE_MAX_BETWEEN_SWIPES`: The maximum duration (in milliseconds) for the pause between swipes.

## Disclaimer

This script is for educational purposes only. Using it may violate Tinder's terms of service, and using it may lead to negative consequences such as being banned from the platform. Use this script responsibly and at your own risk.
