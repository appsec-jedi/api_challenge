app.service('GifService', function($http) {

  var publicAPIkey = "dc6zaTOxFJmzC";
  var API = 'http://api.giphy.com/v1/gifs/';

  this.getRandomGifs = function() {
    return $http({
      type: "GET",
      url: API + 'random?api_key=' + publicAPIkey,
      params: { limit:'1' }
    }).then(function(response){
        console.log("got a response from the API", response);
        return response.data.data.image_url;
      }).catch(function(err){
        console.log("error getting info from API", err);
      });
    };//end of getRandomGifs

  this.searchGif = function(search){
    console.log("search found", search);
    return $http({
      type: "GET",
      url: API + 'search?q=' +  search + '&api_key=' + publicAPIkey,
      params: { limit: "1" }
    }).then(function(response){
        console.log("got a response from the API", response);
        return response.data.data;
        console.log(response.data.data);
      }).catch(function(err){
        console.log("error getting info from API", err);
      });
    }//end of searchGif

    this.searchFavorites = function(search){
      console.log("search found", search);
      return $http({
        type: "GET",
        url: '/favorites'
      }).then(function(response){
          console.log("got a GET response from the DB", response);
          // return response.data.data;
          console.log(response);
          return response;
        }).catch(function(err){
          console.log("error getting info from DB", err);
        });
      }//end of searchFavorites

  this.addFavoriteGif = function(fave){
    console.log("Adding", fave);
    return $http({
      type: "POST",
      url: '/favorites',
      data: fave
    }).then(function(response){
        console.log("got a POST response from the DB", response);
        allFaveGifs = response;
        // faveGif = {
        //   'comment': response.data[0].comment,
        //   'gifUrl': response.data[0].url
        // };
        return allFaveGifs;
      }).catch(function(err){
        console.log("error getting info from DB", err);
      });
    }//end of addFavoriteGif
});//end of service
