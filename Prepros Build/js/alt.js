(function() {
  var Coffee, coffee;

  $(function() {
    return $('img').click(function() {
      var newStyle;
      newStyle = {
        'color': '#F00',
        'font-weight': 'bold'
      };
      $('p').css(newStyle);
      return console.log(coffee.isRussian());
    });
  });

  Coffee = (function() {
    function Coffee(name, level) {
      this.name = name != null ? name : 'Russian';
      this.level = level != null ? level : 2;
    }

    Coffee.prototype.isRussian = function() {
      return this.name === 'Russian';
    };

    Coffee.prototype.alert = function() {
      return alert(this.name);
    };

    return Coffee;

  })();

  coffee = new Coffee;

}).call(this);

//# sourceMappingURL=alt.js.map