var app = angular.module('gifApp', []);

app.controller('GifController', function(GifService){
  console.log('GifController loaded');



  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';

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


  });
