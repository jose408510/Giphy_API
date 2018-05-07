$('button').on('click', function(event) {

    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {

        var results = response.data;
        
        console.log(results)

        for (var i = 0; i < results.length; i++) {
            
            var movingPic = results[i].images.fixed_height.url
            var stillPic = results[i].images.fixed_height_still.url
            
            console.log(movingPic);
            console.log(stillPic);

            var gifDiv = $("<div class='item'>");
        
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.addClass("clickMe");

        animalImage.attr("src", stillPic);
        animalImage.attr('data-state', 'still');    
        animalImage.attr('data-animated', movingPic);
        animalImage.attr('data-still', stillPic);

        gifDiv.append(p);
        gifDiv.append(animalImage);


        $("#newGif").prepend(gifDiv);

    }
});




});

    $(document).on('click', '.clickMe', function(){
        var state = $(this).attr('data-state');
  
        if(state === 'still'){
          $(this).attr('data-state', 'animated');
          $(this).attr('src', $(this).attr('data-animated'));
        }else{
          $(this).attr('data-state', 'still');
          $(this).attr('src', $(this).attr('data-still'))
        }
      })
    