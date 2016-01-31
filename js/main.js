(function ($, $doc, $wnd) {

  // Init modules
  var blocks = BlocksMod();

  // When DOM is ready
  $(function () {
    blocks.init();
  });

  function BlocksMod() {
    var str = {};

    function setStructure() {
      str.$sections = $('.section');
      str.eventsNameSpace = '.blocks';
      str.bottomOfset = 20;
    }

    function init() {
      setStructure();
      handlers('on');
      setScale(str.$sections.eq(0));
    }

    function handlers(method) {
      $wnd[method]('resize' + str.eventsNameSpace, function () {
        setScale(str.$sections.eq(0));
      });
    }

    function setScale($section) {
      var coef,
        $holder = $section.find('.section-holder');
      coef = getSclaeCoef($section);
      $holder.css('transform', 'scale(' + coef + ')');
    }

    

    function getSclaeCoef($section) {
      var sectionHeight = $section.height(),
        sectionWidth = $section.width(),
        sectionRatio = sectionWidth / sectionHeight,
        holderWidth = $section.data('width'),
        holderHeight = $section.data('height'),
        holderRatio = holderWidth / holderHeight,
        coef = sectionRatio > holderRatio ? sectionHeight / holderHeight : sectionWidth / holderWidth;
        return coef.toFixed(2);
    }

    return {
      init: init
    }
  }

}(jQuery, jQuery(document), jQuery(window)));