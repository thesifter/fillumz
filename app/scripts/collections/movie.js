/*global define*/

define([
    'underscore',
    'backbone',
    'models/movie'
], function (_, Backbone, MovieModel) {
    'use strict';

    var MovieCollection = Backbone.Collection.extend({
        model: MovieModel,
		url: function(){
   			 return "http://mymovieapi.com/?limit=10&q=" + this.searchTerm;
	 		 },
	        search: function(searchTerm){
	        	console.log(searchTerm)
			    var results =this;
			    results.searchTerm = searchTerm;
			    results.fetch({
			      success: function(collection, response){
			        console.log("search:results", results);
			        //console.log(response);
			         window.App.movieView.showResults(response,searchTerm)
			      },
			      error: function(collection, response){
			         console.log("search:error", response);
			      }
	   			})
    	
    	}
    })


    return MovieCollection;
});