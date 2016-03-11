(function() {
  (function() {
    'use strict';
    var controller, model, view;
    model = {
      name: ['Alice', 'Joe', 'Black', 'Jerry', 'Grey'],
      clicksCount: [0],
      image: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"]
    };
    controller = {
      init: function(catDefault) {
        if (catDefault == null) {
          catDefault = 0;
        }
        model.init(catDefault);
        return view.init(catDefault);
      },
      changeCat: function(catId) {
        var catToShow;
        catToShow = model[catId];
        return view.render();
      },
      addClicks: function(catId) {
        catId.clicksCount++;
        return view.render();
      }
    };
    view = {
      init: function() {
        var buttons, catButtonName, i, index, len, ref;
        buttons = [];
        ref = model.name;
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          catButtonName = ref[index];
          buttons[index] = "<li><button data-button-no=" + index + ">" + catButtonName + "</button></li>";
        }
        $('body').append(buttons);
        $('p.hello').append(buttons);
        $('ul').append(buttons);
        $('#buttons').append(buttons);
        $(".buttons").append("<p> hello </p>");
        return $(".catDisplay").append(buttons);
      },
      render: function(catName, catClicks, catImage) {
        $('#catName').text(catName);
        $('#catClicks').text("Number of clicks: " + catClicks);
        return $('#catImage').attr('scr', catImage);
      }
    };
    return view.init();
  })();

}).call(this);

//# sourceMappingURL=clicks-mvo.js.map