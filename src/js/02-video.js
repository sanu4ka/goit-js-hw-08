import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify({ seconds }));
};

player.on('timeupdate', throttle(onPlay, 1000));

const playingTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(playingTime.seconds);
}
