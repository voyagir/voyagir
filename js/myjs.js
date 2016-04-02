function openLink(url){
document.location.href = url;
return true;
}
(function() {
  var btn = document.querySelectorAll('button');
  var alog = document.getElementsByClassName('log_anim');
  function animate(x, y, place) {
    if (y >= place.offsetTop - 100) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('fadeOutLeft','hide');
        x[i].classList.add('animated', 'fadeInRight');
      }
    }
  };

  window.addEventListener('scroll', function() {
    var y = document.documentElement.scrollTop;
    animate(alog, y, document.getElementById('inform'));
    animate(btn, y, document.getElementById('voyacteur'));
    animate(btn, y, document.getElementById('other'));
    animate(btn, y, document.getElementById('recommandations'));
  }, true)
})();
