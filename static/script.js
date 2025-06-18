const track = document.getElementById('scroll-track');
const loop = document.getElementById('projects-loop');

loop.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});
loop.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});
