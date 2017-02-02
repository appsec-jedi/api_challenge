var app = angular.module('gifApp', []);

app.controller('GifController', function($http){
  console.log('GifController loaded');

  var API = 'http://api.giphy.com/v1'

  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';

    ctrl.randomGif = function(gif){
      console.log("random gif", gif);
      $http.get(API + '/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
          console.log("got a response from the API", response);
          ctrl.randGif = response.data.data.image_url;
          console.log(ctrl.randGif);
        }).catch(function(err){
          console.log("error getting info from API", err);
        });
      }

      ctrl.searchGif = function(gif){
        console.log("search found", gif);
        console.log(ctrl.search);
        //passed params into url link similar to our randomGif GET
        $http.get(API + '/gifs/search?q='+ ctrl.search + '&api_key=dc6zaTOxFJmzC').then(function(response){
            console.log("got a response from the API", response);
            // ctrl.gifDisplay = response.data.data[0].images.original.url;
            //using this CTRL so return the entire array
            ctrl.gifs = response.data.data;
            console.log(ctrl.gifs);
          }).catch(function(err){
            console.log("error getting info from API", err);
          });
        }

  });
