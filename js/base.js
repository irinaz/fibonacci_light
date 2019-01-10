/**
 * Created by borisayupov on 1/8/19.
 */

(function ($, Drupal) {
  Drupal.behaviors.stickyFooter = {
    attach: function (context, settings) {
      $body = $('body');
      $footer = $("#footer");
      $footerHeight = $footer.outerHeight();
      if($footer){
        calc();
      }
      $(window).resize(function () {
        calc();
      });
      function calc(){
        $wrap = $("#wrap");
        $footer = $("#footer");
        $toolbar1 = 0;
        $toolbar2 = 0;
        if($body.find('.is-active').length !== 0) {
          $toolbar1 = 39;
        }
        if($body.find('.toolbar-bar').length !== 0){
          $toolbar2 = $body.find('.toolbar-bar').height();
        }
        $delta = $(window).height() - ($wrap.height() + $footerHeight);
        if($delta > ($toolbar1 + $toolbar2)) {
          $footer.css({'margin-top': ($delta-$toolbar1-$toolbar2)+'px'});
        }
      }
    }
  };
})(jQuery, Drupal);
