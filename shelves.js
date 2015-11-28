/* Shelves.js plug-in by Pierre Burton
This plug-in allows you to create a shelve effect on elements of the same class name.
This plug-in only work with jQuery so you'll have to link a copy of the original jQuery to your document. 

The result of the Shelve plug-in is fully customizable with css ! 
Just add an expand class to your stylesheet and style it your way. */

$(function() { 
	
	var  elems = $('.box').length;//Determines the number of elements concerned
	
	// for every .box
	$('.box').each(function(index, element) {
		// On click..
		$(this).click(function(){
			//Toggle the .expand class
			$(this).toggleClass('expand');
			// if the click aims to create a second .expand...
			if ($('.expand').length > 1) {
				//The old .expand GTFO and the clicked box get the class
				$('.expand').removeClass('expand');
				$(this).addClass('expand');
			}
		});
	});

	// Click on buttons...
	var i = -1;
	// Click on "next" button
	$('#next').click(function(){
		
		i++; // each click on the button increments "i" and triggers the following function...
		
		$('.box').each(function(index, element) {
			
			var a = i-1;
			
			if (i < elems) {
			// .box with index = i gets class .expand while .box with index = a looses it...	
				$('.box:eq('+i+')').addClass('expand');
				$('.box:eq('+a+')').removeClass('expand');
				return false;
			}
			if (i > (elems-1)) {
				// when "i" grows further than the number of elements, it gets back to zero
				i = 0;
			}
		});
	});

	// Click on "previous" button
	$('#prev').click(function(){
		
		Math.abs(i);// prevents i from going negative
		i--; // each click on the button decrements "i" and triggers the following function...
		
		$('.box').each(function(index, element) {
			
			var a = i+1;
			
			if (i >= 0) {
			// .box with index = i gest class .expand while .box with index = a looses it...	
				$('.box:eq('+i+')').addClass('expand');
				$('.box:eq('+a+')').removeClass('expand');
				return false;
			}
			if (i < 0) {
				
				if ($('.box:eq(0)').hasClass('expand')) { // When i = 0 and is decremented, prevents a bug in which the first box stays expanded
					$(this).removeClass('expand');
				}
				// when "i" decreases further than 0, it gets back to your number of elements-1 (i.e. if you have 10 elements, the index of the last is 10-1)
				i = elems-1;
			}
		});
	});

	// click on .box while button's event is triggered...
	$('.box').click(function() {
		
		if ($(this).hasClass('expand')) {
			// if click on .box which gets expanded, i gets his index as value
			i = $(this).index();
		}
		
		else {
			// if click on .expand box, i gets his default value
			i = -1;
		}
	});
});(jQuery)
