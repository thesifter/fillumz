/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MovieModel = Backbone.Model.extend({
        defaults: {
        },
   		urlRoot: function(){
   			 return "http://mymovieapi.com/?id=" + this.imdbid;
 		 },

	    parse: function(response) {
	        return response.results;
	    },
	    
        getByID: function(imdbid){
        	//console.log("getByID")
		    var record =window.App.collection;
		    record.url = "http://mymovieapi.com/?id=" + imdbid;
		    record.imdbid = imdbid;
		    record.fetch({
		      success: function(collection, response){

		         window.App.movieDetailView.render(response)
		      },
		      error: function(collection, response){
		         console.log("search:error", response);
		      }
   			})},

    sync: function(method, model, options) {
    	///console.log(method, model, options)
        var that = this;
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: that.url,
            processData: false
        }, options);

        return $.ajax(params);
    }
    });

    return MovieModel;
});

