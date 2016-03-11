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
      init: function() {
        var clicks, i, j, len, ref;
        ref = model.name;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          clicks = ref[i];
          model.clicksCount[i] = 0;
        }
        controller.changeCat();
        return controller.addClicks();
      },
      changeCat: function(catId) {
        return $('button').click(function(e) {
          var selectedCatNo;
          selectedCatNo = $(this).data('cat-no');
          return view.renderAll(selectedCatNo);
        });
      },
      addClicks: function(catId) {
        return $('img').click(function(e) {
          var selectedCatNo;
          selectedCatNo = $(this).data('cat-image-no');
          model.clicksCount[selectedCatNo]++;
          return view.renderElement.clicks(selectedCatNo);
        });
      }
    };
    view = {
      init: function(startCatIndex) {
        var buttons, catButtonName, index, j, len, ref;
        if (startCatIndex == null) {
          startCatIndex = 0;
        }
        buttons = [];
        model.name.sort();
        ref = model.name;
        for (index = j = 0, len = ref.length; j < len; index = ++j) {
          catButtonName = ref[index];
          buttons[index] = "<li><button data-cat-no=" + index + ">" + catButtonName + "</button></li>";
        }
        $(".buttons").append(buttons);
        return view.renderAll(startCatIndex);
      },
      renderAll: function(indexToDisplay) {
        view.renderElement.name(indexToDisplay);
        view.renderElement.clicks(indexToDisplay);
        return view.renderElement.image(indexToDisplay);
      },
      renderElement: {
        name: function(indexToDisplay) {
          return $('.catName').text(model.name[indexToDisplay]);
        },
        clicks: function(indexToDisplay) {
          return $('.catClicks').text("Number of clicks: " + model.clicksCount[indexToDisplay]);
        },
        image: function(indexToDisplay) {
          return $('.catImage').attr({
            src: model.image[indexToDisplay]
          }).data("cat-image-no", indexToDisplay);
        }
      }
    };
    view.init();
    return controller.init();
  })();

}).call(this);

//# sourceMappingURL=clicks-mvo.js.map