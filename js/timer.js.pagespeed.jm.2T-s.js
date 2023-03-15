document.addEventListener("DOMContentLoaded", function(event) {

  var fullTime = new Date().getTime() + 13500000;
  $('.countdown-container').countdown(fullTime, function(event) {
      $(this).html(event.strftime(
          '<div class="timer__wrapp">' +
          '<div class="timer__item time__hours">%H</div>' +
          '<div class="timer__text text__hours">ore</div>' +
          '</div>' +
          '<div class="timer__dots">:</div>' +

          '<div class="timer__wrapp">' +
          '<div class="timer__item time__minutes">%M</div>' +
          '<div class="timer__text text__minutes">minuti</div>' +
          '</div>' +
          '<div class="timer__dots">:</div>' +

          '<div class="timer__wrapp">' +
          '<div class="timer__item time__seconds">%S</div>' +
          '<div class="timer__text text__seconds">secondi</div>' +
          '</div>'));
  });
});