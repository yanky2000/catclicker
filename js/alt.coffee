
# $('img').click ->
# 	alert "clik"

# printMe =->
# 	alert "Im a functin"

# printMe

$ ->
  $('img').click ->
    newStyle =
      'color': '#F00'
      'font-weight': 'bold'
    $('p').css newStyle
    console.log(coffee.isRussian())

	class Coffee
		constructor: (@name='Russian', @level=2)->
		isRussian: -> @name is 'Russian'
		alert: -> alert(@name)

	coffee = new Coffee

	# coffee.alert

