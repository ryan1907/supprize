$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var sound = document.getElementById("loveSound");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    sound.currentTime = 0;
    sound.play();
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    sound.pause();
    sound.currentTime = 0;
  }
});