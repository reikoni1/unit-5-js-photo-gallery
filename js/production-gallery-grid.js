
var photopath="";
var alt= ["hay bales", "lake", "canyon", "iceberg","desert","fall","plantation","dunes","countryside lane","sunset","cave","bluebells"];
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


/* This js will create the photo gallery using the innerHTML to insert the content in HTML */

for(var a=1; a<=12; a++){
    if (a<=9){
        photopath += '<a href="photos/0'+a+'.jpg" data-caption="'+caption[a-1]+'"> <img src="photos/thumbnails/0'+a+'.jpg" alt="'+alt[a-1]+'"> </a>';
    } 
    else {
        photopath += '<a href="photos/'+a+'.jpg" data-caption="'+caption[a-1]+'"> <img src="photos/thumbnails/'+a+'.jpg" alt="'+alt[a-1]+'"> </a>';
    }
    document.querySelector(".gallery").innerHTML=photopath;
}



