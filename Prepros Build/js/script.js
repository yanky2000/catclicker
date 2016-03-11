function global () {
	jQuery(document).ready(function($) {

		var clicksNo = clicksNo ? clicksNo : [];
		var numberOfCats = $('.cat').length;
		var catsName = ['Tom', 'Henry', 'Jess', 'Julie'];
		var whichCat;

		//Give names to cats
		for (var i = 0; i < numberOfCats; i++) {
			var cat = "[data-cat-no=" + (i+1) + "]";
			console.log(cat);
			$(cat).before('<h2 class ="name">' + catsName[i]);
			}

		for (i = 0; i < numberOfCats; i++) {
			clicksNo[i] = 0;
			console.log(clicksNo[i]);
		}

		$('img').click(function(event) {
			whichCat = $(this).data('cat-no');
			console.log(whichCat);
			clicksNo[whichCat-1] ++;


			$(".noClicksCat" + whichCat).text("Cat has been clicked: " + clicksNo[whichCat-1] + " time(s)");

		});
	});
}
global ();