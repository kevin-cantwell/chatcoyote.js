
(function($) {
  /*
   * Usage: 
   * $('#somediv').chatcoyote({
   *   room : 'My Room',
   *   href : 'http://www.siteworthtalkingabout.com/important-page'
   * });
   *
   */
  $.fn.chatcoyote = function (opts) {

    var config = {
      room : '',
      href : window.location.href
    };

    var options = $.extend(true, config, opts);

    this.each( function () {
      $el = $(this);
      $iframe = $('<iframe src="http://chatcoyote.herokuapp.com/chat?room=' + options.room +'&href=' + options.href + '"></iframe>').css({
        width : $el.width(),
        height : $el.height(),
        border : 'none'
      });
      $el.html($iframe);
    });

    return this;
  };
})(jQuery);