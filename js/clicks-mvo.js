(function() {
  (function() {
    'use strict';
    var controller, model, view;
    model = {
      selectedCatNo: 0,
      name: ['Alice', 'Joe', 'Black', 'Jerry', 'Grey'],
      clicksCount: [0],
      image: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],
      buttons: []
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
        var catButtonName, index, j, len, ref;
        ref = model.name;
        for (index = j = 0, len = ref.length; j < len; index = ++j) {
          catButtonName = ref[index];
          model.buttons[index] = "<li><button class='catNameButton' data-cat-no=" + index + ">" + catButtonName + "</button></li>";
        }
        return model.buttons;
      },
      changeCatEvent: function(catId) {
        return $('.catNameButton').click(function(e) {
          model.selectedCatNo = $(this).data('cat-no');
          view.renderCatDisplay(model.selectedCatNo);
          return controller.fillAdminPanel();
        });
      },
      changeClicksEvent: function(catId) {
        return $('img').click(function(e) {
          model.clicksCount[model.selectedCatNo]++;
          view.renderElement.clicks(model.selectedCatNo);
          return controller.fillAdminPanel();
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
      },
      adminMode: function() {
        $('#admin').click(function() {
          $('.admin-control').show();
          return controller.fillAdminPanel();
        });
        $('#cancel').click(function() {
          return $('.admin-control').hide();
        });
        return $('#save').click(function(catId, newCatValues) {
          model.name[model.selectedCatNo] = $('#admin-cat-name').val();
          view.renderElement.name(model.selectedCatNo);
          $(".catNameButton[data-cat-no='" + model.selectedCatNo + "']").text(model.name[model.selectedCatNo]);
          return $('.admin-control').hide();
        });
      },
      fillAdminPanel: function() {
        return view.renderAdminPanel(model.name[model.selectedCatNo], model.clicksCount[model.selectedCatNo], model.image[model.selectedCatNo]);
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
        controller.changeClicksEvent();
        return controller.adminMode();
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
      },
      renderAdminPanel: function(catName, catClicks, catImage) {
        $('#admin-cat-name').val(catName);
        $('#admin-cat-clicks').val(catClicks);
        return $('#admin-cat-image').val(catImage);
      }
    };
    return view.init();
  })();

}).call(this);

//# sourceMappingURL=clicks-mvo.js.map