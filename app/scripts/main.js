    /*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
        'backbone',
        'routes/movie',
        'views/movie',
        'views/moviedetail',
        'collections/movie',
        'models/movie'
], function (Backbone, Router, MovieView, MovieDetailView, MovieCollection, MovieModel) {
    window.App = {
    }; 
    window.App.router = new    Router();
    window.App.movieView = new MovieView();  
    window.App.movieDetailView = new MovieDetailView();  
    window.App.collection = new MovieCollection();   
    window.App.movieModel = new MovieModel();
    
    Backbone.history.start();


});
