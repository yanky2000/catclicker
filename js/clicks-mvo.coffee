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
		dataPrep: ->
			#Organize initial data
			model.name.sort()

			for clicks,i in model.name
				model.clicksCount[i] = 0


		giveNamesToButtons: ->	# Give initial cat names to buttons
			buttons= []
			for catButtonName, index in model.name
				buttons[index] = "<li><button class='catNameButton' data-cat-no=#{index}>#{catButtonName}</button></li>"
			buttons

		changeCatEvent: (catId)->
			#Added button clicks event handlers
			$('.catNameButton').click (e)->
				selectedCatNo = $(@).data('cat-no')
				view.renderCatDisplay(selectedCatNo)

		changeClicksEvent: (catId)->
			#Incrementing clicks on images
			$('img').click (e)->
				selectedCatNo = $(@).data('cat-image-no')
				model.clicksCount[selectedCatNo]++
				view.renderElement.clicks(selectedCatNo)
		
		get: (propName, index) ->
			switch propName
				when 'name' then model.name[index]
				when 'clicks' then model.clicksCount[index]
				when 'image' then model.image[index]

	view =
		init: (startIndex=0)->
			# render defaul cat data and buttons
			controller.dataPrep()
			catNames = controller.giveNamesToButtons()
			@.renderElement.buttons(catNames)
			@.renderCatDisplay(startIndex)
			controller.changeCatEvent()
			controller.changeClicksEvent()

		renderCatDisplay: (indexToDisplay)->
			@.renderElement.name(indexToDisplay)
			@.renderElement.clicks(indexToDisplay)
			@.renderElement.image(indexToDisplay)

		renderElement:
			buttons: (buttons) -> $(".buttons").append(buttons)
			name: (indexToDisplay)-> $('.catName').text controller.get('name', indexToDisplay)
			image: (indexToDisplay)-> $('.catImage').attr(src: controller.get('image', indexToDisplay)).data("cat-image-no", indexToDisplay)
			clicks: (indexToDisplay)-> $('.catClicks').text "Number of clicks: #{controller.get('clicks', indexToDisplay)}"

	view.init()

