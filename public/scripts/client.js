var app = angular.module('gifApp', ['ngRoute']);

app.controller('GifController', function(GifService){
  console.log('GifController loaded');

  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';
  ctrl.addedGifs = {};
  ctrl.allGifs = null;

  ctrl.randomGif = function(){
    console.log('button clicked');
    GifService.getRandomGifs().then(function(gif){
      ctrl.randGif = gif;
    });
  }//end of randomGif


  ctrl.searchForGifs = function(search){
    console.log("button clicked, searching for, ", search);
    GifService.searchGif(search).then(function (gifUrl){
      console.log(gifUrl);
      ctrl.gifDisplay = gifUrl;
      console.log("search found", ctrl.gifDisplay);
    })//end of searchGif
  }//end of searchForGifs

  // ctrl.searchForFavorites = function() {
  //   console.log("searching for favorites");
    GifService.searchFavorites().then(function(searchReturn){
      console.log("Here are your favorites, ", searchReturn);
      ctrl.allGifs = searchReturn.data;
      console.log(ctrl.allGifs);
    });
  // };

  ctrl.addFavorite = function(comment, url){
    console.log("Added ", comment, '', url, " to favorites");
    ctrl.addedGifs = {
      'comment': comment,
      'url': url
    }
    console.log(ctrl.addedGifs);
    GifService.addFavoriteGif(ctrl.addedGifs).then(function(faveGif){
      console.log("list of all faves ", faveGif);
      // ctrl.allGifs = faveGif;
    })
  }//end of addFavorite
});// end of GifController

app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'GifController as gif'
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
    controller: 'GifController as gif'
  });

  $locationProvider.html5Mode(true);
});//end of routing
