// API Key
var apikey = "ececee688d4f53e59ea89f04c7943e17d5e2d3bf";

$(document).ready(function(){
    console.log("ready!");

    $("#submit").on("click", function(event) {
  event.preventDefault();

  var queryURL = "https://api.otreeba.com/v1/strains?page=1&count=10&sort=-createdAt"

        $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {
        // var rep = response.data;
         console.log(response);
       });




})
