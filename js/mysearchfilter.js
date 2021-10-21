
var caption=["I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
"The lake was so calm today. We had a great view of the snow on the mountains from here.",
"I hiked to the top of the mountain and got this picture of the canyon and trees below.",
"It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ",
"The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
"Fall is coming, I love when the leaves on the trees start to change color.",
"I drove past this plantation yesterday, everything is so green!",
"My summer vacation to the Oregon Coast. I love the sandy dunes!",
"We enjoyed a quiet stroll down this countryside lane. ",
"Sunset at the coast! The sky turned a lovely shade of orange.",
"I did a tour of a cave today and the view of the landscape below was breathtaking.",
"I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."]

var anchor= document.getElementsByTagName("a");  /* get all the anchor tag in html */

function imgresearch() {

    var input= document.getElementById("search").value.toLowerCase(); /* get the user input from the HTML searchbar and ignore letter case */

    for(var a=1; a<=12; a++){ 

        if (caption[a-1].toLowerCase().includes(input)){    /* check if the caption == user input and ignore letter case */

            anchor[a-1].style.display = "block";  /* if the user input is associated with any caption set the style of the anchor element to "block" */
        } 
        else {
            anchor[a-1].style.display = "none";   /* if the user input isn't associated with any caption set the style of the anchor element to "none" */
        }
    } 
}  




  