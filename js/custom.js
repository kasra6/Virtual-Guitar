function playSound(evt){
  const sound = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  if (!sound) return // stop function if the key is not defined
  const key = document.querySelector(`kbd[data-key="${evt.keyCode}"]`);
  sound.currentTime = 0;
  sound.play();
  key.classList.add("playing");
  key.addEventListener('transitionend', function(evt){
    this.classList.remove("playing");
  });

}

window.addEventListener('keydown', playSound);
