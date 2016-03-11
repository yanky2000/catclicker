do ->
	catsName = ["Alice", "Cub", "Redjy", "Arman", "Thomas", "Pussy"]
	catsName.sort()
	cat =
		name:  catsName
		imageSource: 'img/'
		image: [
			'1.jpg'
			'2.jpg'
			'3/jpg'
			'4.jpg'
			'5.jpg' ]
		clicks: []

	numberOfCats = $('[data-cat-no')

	for catImage, i  in numberOfCats
		catName = cat.name[i]
		debugger
		$(catImage).before "<h2 data-h2cat-no=#{i+1}>#{catsName[i]}"
		$("[data-h2cat-no=#{i+1}]").after "<p class='cat#{i+1}'></p>"


	$('h2').click ->
		index = $(@).attr('data-h2cat-no')
		cat.clicks[index] = if cat.clicks[index] then cat.clicks[index]+1 else 1
		$(".cat#{index}").text "Number of clicks: #{cat.clicks[index]}"






