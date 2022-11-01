import Player from '@vimeo/player';

const player = new Player('vimeo-player', {});
const saveCurrentTime = localStorage.getItem('videoplayer-current-time');

if (saveCurrentTime) {
  player.setCurrentTime(Number(saveCurrentTime));
}

player.on('timeupdate', ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));

  console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));
});
