(function() {
  (function() {
    var cat, catImage, catName, catsName, i, j, len, numberOfCats;
    catsName = ["Alice", "Cub", "Redjy", "Arman", "Thomas", "Pussy"];
    catsName.sort();
    cat = {
      name: catsName,
      imageSource: 'img/',
      image: ['1.jpg', '2.jpg', '3/jpg', '4.jpg', '5.jpg'],
      clicks: []
    };
    numberOfCats = $('[data-cat-no');
    for (i = j = 0, len = numberOfCats.length; j < len; i = ++j) {
      catImage = numberOfCats[i];
      catName = cat.name[i];
      debugger;
      $(catImage).before("<h2 data-h2cat-no=" + (i + 1) + ">" + catsName[i]);
      $("[data-h2cat-no=" + (i + 1) + "]").after("<p class='cat" + (i + 1) + "'></p>");
    }
    return $('h2').click(function() {
      var index;
      index = $(this).attr('data-h2cat-no');
      cat.clicks[index] = cat.clicks[index] ? cat.clicks[index] + 1 : 1;
      return $(".cat" + index).text("Number of clicks: " + cat.clicks[index]);
    });
  })();

}).call(this);

