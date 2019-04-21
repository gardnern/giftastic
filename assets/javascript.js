$(document).ready(function(){
  $(document).on('click', '.gifButton', function(){
      fetchGifs($(this).attr('data-value'))
  //invoke a function that fetches this data
  });  
  function fetchGifs(queryParam){
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  queryParam + "&api_key=dc6zaTOxFJmzC&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response){
  console.log(response);
  
  
    }).catch(function(error){
        console.log(error);
    }); 
  }
  
  
    var someButtonNames = ['horse', 'pig'];
  
    function htmlTemplateCreator(buttonName){
  return "<button class='gifButton' data-value='" + buttonName + "'>" +  buttonName + "</button>"
    }
  
    function displayButtons(){
      $('.gifContainer').empty();
      for(var i = 0; i < someButtonNames.length;i++){
         
          var newHtml = htmlTemplateCreator(someButtonNames[i]);
          $('.gifContainer').append(newHtml);
      }
    }
  
    displayButtons();
  
  });
  
  