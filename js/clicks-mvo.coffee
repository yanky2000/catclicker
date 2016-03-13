do ->
	'use strict'
	model =
		selectedCatNo: 0
		name: ['Alice', 'Joe', 'Black', 'Jerry', 'Grey']
		clicksCount: [0]
		image: [
			"img/1.jpg"
			"img/2.jpg"
			"img/3.jpg"
			"img/4.jpg"
			"img/5.jpg"
		]
		buttons: []


	controller =
		dataPrep: ->
			#Organize initial data
			model.name.sort()

			for clicks,i in model.name
				model.clicksCount[i] = 0


		giveNamesToButtons: ->	# Give initial cat names to buttons
			for catButtonName, index in model.name
				model.buttons[index] = "<li><button class='catNameButton' data-cat-no=#{index}>#{catButtonName}</button></li>"
			model.buttons

		changeCatEvent: (catId)->
			#Added button clicks event handlers
			$('.catNameButton').click (e)->
				model.selectedCatNo = $(@).data('cat-no')
				view.renderCatDisplay(model.selectedCatNo)
				controller.fillAdminPanel()

		changeClicksEvent: (catId)->
			#Incrementing clicks on images
			$('img').click (e)->
				# selectedCatNo = $(@).data('cat-image-no')
				model.clicksCount[model.selectedCatNo]++
				view.renderElement.clicks(model.selectedCatNo)
				controller.fillAdminPanel()

		get: (propName, index) ->
			switch propName
				when 'name' then model.name[index]
				when 'clicks' then model.clicksCount[index]
				when 'image' then model.image[index]

		adminMode: ->
			$('#admin').click ->
				$('.admin-control').show()
				controller.fillAdminPanel()

			$('#cancel').click ->
				$('.admin-control').hide()

			# should use separate method for this
			$('#save').click (catId, newCatValues)->
				model.name[model.selectedCatNo] = $('#admin-cat-name').val()
				view.renderElement.name(model.selectedCatNo)

				#Change button name
				$(".catNameButton[data-cat-no='#{model.selectedCatNo}']").text(model.name[model.selectedCatNo])
				$('.admin-control').hide()

		fillAdminPanel: ->
				#TODO: inputs should contain data for currently selected cat
				view.renderAdminPanel(model.name[model.selectedCatNo], model.clicksCount[model.selectedCatNo], model.image[model.selectedCatNo])



	view =
		init: (startIndex=0)->
			# render defaul cat data and buttons
			controller.dataPrep()
			catNames = controller.giveNamesToButtons()
			@.renderElement.buttons(catNames)
			@.renderCatDisplay(startIndex)
			controller.changeCatEvent()
			controller.changeClicksEvent()
			controller.adminMode()

		renderCatDisplay: (indexToDisplay)->
			@.renderElement.name(indexToDisplay)
			@.renderElement.clicks(indexToDisplay)
			@.renderElement.image(indexToDisplay)

		renderElement:
			buttons: (buttons) -> $(".buttons").append(buttons)
			name: (indexToDisplay)-> $('.catName').text controller.get('name', indexToDisplay)
			image: (indexToDisplay)-> $('.catImage').attr(src: controller.get('image', indexToDisplay)).data("cat-image-no", indexToDisplay)
			clicks: (indexToDisplay)-> $('.catClicks').text "Number of clicks: #{controller.get('clicks', indexToDisplay)}"

		renderAdminPanel: (catName, catClicks, catImage)->
			$('#admin-cat-name').val(catName)
			$('#admin-cat-clicks').val(catClicks)
			$('#admin-cat-image').val(catImage)


	view.init()

	# when