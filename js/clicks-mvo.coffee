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
		init: (catDefault = 0)->
			model.init(catDefault)#do I need it?
			view.init(catDefault)

		changeCat: (catId)->
			catToShow = model[catId]
			view.render()

		addClicks: (catId)->
			catId.clicksCount++
			view.render()



	view =
		init: (catDefault) ->
			# render list of buttons
			# fragment = $(document).createDocumentFragment()
			buttons= []
			for catButtonName, index in model.name
				buttons[index] = "<li><button data-button-no=#{index}>#{catButtonName}</button></li>"

			$('body').append(buttons) #Works!
			$('p.hello').append(buttons)
			$('ul').append(buttons)
			$('ul.buttons').append(buttons)
			$(".buttons").append(buttons)
			# debugger
			


			# render defaul cat data

		render: (catName, catClicks, catImage)->
			$('#catName').text catName
			$('#catClicks').text "Number of clicks: #{catClicks}"
			$('#catImage').attr('scr', catImage)

	view.init()