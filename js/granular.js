//Aim: to smooth scroll our page depending when our arrow button is clicked

//Step 1: Attach a click event listener to our arrow button on the click action.
$(".scroll-to").on("click", function(){

//Step 2: find the id of the section that we want to scroll to & store it.
  // var sectionName = "#first-section"

// To make our code dynamic and portable, we need to change the value of our variable sectionName. Ideally we want to grap the href attribute of whichever anchor tag has been clicked on. The href will store the section that the anchor tag wants to scroll to.

// We use jquery's keyword 'this'- in order to access the element that has been clicked on.
// To access the elements attributes, we use the .attr action.
// we then want to store the href, so we add "href" between the brackets.
var sectionName = $(this).attr("href");
console.log(sectionName);


//Step 3: store how many pixels from the top the section we want to scroll to is.
//the offset method allows us to retrieve the current position of an element relative to our page.
//We need to specify where we want to measure from, so we use .top
// .offset . top measures the distact (the offset) from the top of the page in order for the botton to move so the top of the next section moves there. (distance of movement) - the value will change according to the height of the browser.
  var sectionPlacement = $(sectionName).offset().top;
  // console.log(sectionPlacement); ---how we test our jquery is working

//Step 4: animate or smoothly scroll our page to the section we want to scroll to.
//First we select our entire page by referencing 'html, body'. We do this as we need to move the entire page to where our section is placed.
//.animate allows us to animate different properties. It takes the following values, property to animate, duration, easing, completion. We only need the first two.
//scrollTop allows us to move the vertical scrollbar to a given pixel measurement.
//We specify section placement to animate the scrollbar to the position of our 'first section'.
//We use 1000 here to set the animation duration, in milliseconds.
$("html, body").animate({scrollTop: sectionPlacement}, 1000);

//Step 5: Stop the section from flashing before our animation takes place. - this is due to the html kicking in before the java script.
//To stop our links from jumping to the section inside href we use return false.
// This stops our jquery returning to the html. Stops the 'Im done - carry on with your default behaviour' message being sent back to our anchor tag.
return false;

});
