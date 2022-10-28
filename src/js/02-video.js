import Player from '@vimeo/player';

const player = new Player('vimeo-player', {});

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(+localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));

  console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));
});
