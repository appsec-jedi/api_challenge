app.service('GifService', function($http) {
  var API = 'http://api.giphy.com/v1'

  this.getRandomGifs = function() {
    return $http.get(API + '/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
        console.log("got a response from the API", response);
        return response.data.data.image_url;
      }).catch(function(err){
        console.log("error getting info from API", err);
      });
    };//end of getRandomGifs

  this.searchGif = function(search){
    console.log("search found", search);
    return $http.get(API + '/gifs/search?q='+ search + '&api_key=dc6zaTOxFJmzC').then(function(response){
        console.log("got a response from the API", response);
        return response.data.data;
        console.log(response.data.data);
      }).catch(function(err){
        console.log("error getting info from API", err);
      });
    }//end of searchGif

});//end of service
