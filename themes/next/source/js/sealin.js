var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 9999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": s(),
      "opacity": 1
    });
    // 如果鼠标已在屏幕边缘, 修正气泡位置
    if ($(window).width() - x < 40) {
      $i.css({
        "left": $(window).width() - 40
      });
    }
    $("body").append($i);
    $i.animate({
        "top": $(document).height() - y > 200 ? y + 180 : y - 180,
        "opacity": 0
      },
      2000,
      function() {
        $i.remove();
      });
  });
  setTimeout('delay()', 2000);
});

function delay() {
  $(".buryit").removeAttr("onclick");
}

function s() {
  return "rgb(" + ~~ (150 * Math.random()) + "," + ~~ (150 * Math.random()) + "," + ~~ (150 * Math.random()) + ")"
}