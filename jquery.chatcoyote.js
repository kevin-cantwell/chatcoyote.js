
(function($) {
  /*
   * Usage: 
   * $('#somediv').chatcoyote({
   *   css : someCssThatYouWantAppliedInternallyToTheChatIframe,
   *   collapsed : initializeInTheCollapsedPosition
   * });
   */
  $.fn.chatcoyote = function (opts) {

    var config = {
      room : window.location.href,
      css : undefined,
      collapsed : true
    };

      var options = $.extend(true, config, opts);

      this.each( function () {
        $el = $(this);
        $iframe = $('<iframe src="http://yacc.meteor.com/' + options.room +'" style></iframe>').css({
          width : $el.width(),
          height : $el.height()
        });
        $el.html($iframe);
      });

    return this;
  };
})(jQuery);