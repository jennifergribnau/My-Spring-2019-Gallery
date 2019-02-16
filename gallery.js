// document ready function
$(document).ready(function(){
	// VARIABLES
	// select all the slides (value of the variable will be an array)
	// set the index slide (number) AKA where we start
	 var slides = ["#slide1", "#slide2", "#slide3", "#slide4", "#slide5"];

	// current slide based on the index
	var currentSlide = 0;
	// STEPS
	// 1. hide all slides except for the one we want to see (e.g all but the first)		
			// a.
			// b.
	// 2. move in the specified direction
			// a.
			// b.
	// 3. return to the opposite or resetting

	// INSTRUCTIONS
	// hide all the slides
	for (var i=0; i<slides.length; i++) {
    $(slides[i]).hide();
  }
		
	// show the first slide
	$(slides[currentSlide]).show();
	// when the user clicks "next"
	$("#nextButton").click(function(){
		// hide the current slide
		$(slides[currentSlide]).hide();

		// increment the slide index
		currentSlide++;
    if (currentSlide > 4) {
        currentSlide = 0;
    }
	//same as slideIndex = slideIndex + 1
		// conditional check of the slideIndex (if greater than 4...)

			// reset to 0 

		// set the current slide based on the newly incremented slideIndex 

		// show the next 
		$(slides[currentSlide]).show();
  });
		// go to the start

	// when the user clicks "previous"
	$("#prevButton").click(function(){
	// hide the current slide
		$(slides[currentSlide]).hide();
		// increment the slide index
		

			//same as slideIndex = slideIndex + 1

		// conditional check of the slideIndex (if greater than 4...)

			// reset to 0 

		// set the current slide based on the newly incremented slideIndex 
		currentSlide--;
    if (currentSlide < 0) {
        currentSlide = 4;
    }
		// show the next 
		$(slides[currentSlide]).show();
  });
 
}); 
	// close the document ready function

		// go to the end
