/*global define*/

define([
    'jquery',
    'backbone',
], function ($, Backbone) {
    'use strict';

    var MovieRouter = Backbone.Router.extend({
        routes: {
            "movie/:id(/:query)": "getMovie",
            "search/:query": "search" 
        },
          initialize: function() {
    	},
    	   getMovie: function(id,query) {


    	   	window.App.movieModel.getByID(id);
    	   	
   		 },
    	   search: function(query) {

    	   
    	   window.App.collection.search(query);


   		 }


    });

    return MovieRouter;
});