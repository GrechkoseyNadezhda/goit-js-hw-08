import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timer, 1000));

function timer(time) {
  localStorage.setItem(VIDEO_TIME, time.seconds);

  console.dir(VIDEO_TIME);
}

const currentTime = localStorage.getItem(VIDEO_TIME);

if (currentTime) {
  player.setCurrentTime(currentTime);
}
