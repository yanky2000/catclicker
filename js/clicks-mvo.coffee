do ->
	'use strict'
	model =
		name: ['Alice', 'Joe', 'Black', 'Jerry', 'Grey']
		clicksCount: [0]
		image: [
			"img/1.jpg"
			"img/2.jpg"
			"img/3.jpg"
			"img/4.jpg"
			"img/5.jpg"
		]


	controller =
		init: ->
			for clicks,i in model.name
				model.clicksCount[i] = 0

			controller.changeCat()
			controller.addClicks()


		changeCat: (catId)->
			#Added button clicks event handlers
			$('button').click (e)->
				selectedCatNo = $(@).data('cat-no')
				view.renderAll(selectedCatNo)


		addClicks: (catId)->
			#Incrementing clicks on images
			$('img').click (e)->
				selectedCatNo = $(@).data('cat-image-no')
				model.clicksCount[selectedCatNo]++

				view.renderElement.clicks(selectedCatNo)



	view =
		init: (startCatIndex = 0) ->
			# render defaul cat data and buttons
			buttons= []
			model.name.sort()
			for catButtonName, index in model.name
				buttons[index] = "<li><button data-cat-no=#{index}>#{catButtonName}</button></li>"

			$(".buttons").append(buttons)

			view.renderAll(startCatIndex)

		renderAll: (indexToDisplay)->
			view.renderElement.name(indexToDisplay)
			view.renderElement.clicks(indexToDisplay)
			view.renderElement.image(indexToDisplay)

		renderElement:
			name: (indexToDisplay)-> $('.catName').text model.name[indexToDisplay]
			clicks: (indexToDisplay)-> $('.catClicks').text "Number of clicks: #{model.clicksCount[indexToDisplay]}"
			image: (indexToDisplay)-> $('.catImage').attr(src: model.image[indexToDisplay]).data("cat-image-no", indexToDisplay)

	view.init()
	controller.init()

