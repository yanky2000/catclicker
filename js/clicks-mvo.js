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
      dataPrep: function() {
        var clicks, i, j, len, ref, results;
        model.name.sort();
        ref = model.name;
        results = [];
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          clicks = ref[i];
          results.push(model.clicksCount[i] = 0);
        }
        return results;
      },
      giveNamesToButtons: function() {
        var buttons, catButtonName, index, j, len, ref;
        buttons = [];
        ref = model.name;
        for (index = j = 0, len = ref.length; j < len; index = ++j) {
          catButtonName = ref[index];
          buttons[index] = "<li><button data-cat-no=" + index + ">" + catButtonName + "</button></li>";
        }
        return buttons;
      },
      changeCatEvent: function(catId) {
        return $('button').click(function(e) {
          var selectedCatNo;
          selectedCatNo = $(this).data('cat-no');
          return view.renderCatDisplay(selectedCatNo);
        });
      },
      changeClicksEvent: function(catId) {
        return $('img').click(function(e) {
          var selectedCatNo;
          selectedCatNo = $(this).data('cat-image-no');
          model.clicksCount[selectedCatNo]++;
          return view.renderElement.clicks(selectedCatNo);
        });
      },
      get: function(propName, index) {
        switch (propName) {
          case 'name':
            return model.name[index];
          case 'clicks':
            return model.clicksCount[index];
          case 'image':
            return model.image[index];
        }
      }
    };
    view = {
      init: function(startIndex) {
        var catNames;
        if (startIndex == null) {
          startIndex = 0;
        }
        controller.dataPrep();
        catNames = controller.giveNamesToButtons();
        this.renderElement.buttons(catNames);
        this.renderCatDisplay(startIndex);
        controller.changeCatEvent();
        return controller.changeClicksEvent();
      },
      renderCatDisplay: function(indexToDisplay) {
        this.renderElement.name(indexToDisplay);
        this.renderElement.clicks(indexToDisplay);
        return this.renderElement.image(indexToDisplay);
      },
      renderElement: {
        buttons: function(buttons) {
          return $(".buttons").append(buttons);
        },
        name: function(indexToDisplay) {
          return $('.catName').text(controller.get('name', indexToDisplay));
        },
        image: function(indexToDisplay) {
          return $('.catImage').attr({
            src: controller.get('image', indexToDisplay)
          }).data("cat-image-no", indexToDisplay);
        },
        clicks: function(indexToDisplay) {
          return $('.catClicks').text("Number of clicks: " + (controller.get('clicks', indexToDisplay)));
        }
      }
    };
    return view.init();
  })();

}).call(this);

//# sourceMappingURL=clicks-mvo.js.map