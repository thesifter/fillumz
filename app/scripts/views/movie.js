/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MovieView = Backbone.View.extend({
        template: JST['app/scripts/templates/movie.ejs'],
        
		initialize: function(){
		this.el =  "#search"
		},
		events : {
          "click .button" : "doSearch"
        },

		doSearch: function(){
			console.log("doSearch")
			var q = $("#searchbox").val()
			window.App.collection.search(q);
		},

		showResults: function(results,searchTerm){
		var res = {results:results,searchTerm:searchTerm}
		this.collection = res;
		this.render();
		},

		render: function(){
		var html = this.template(this.collection);
		$(this.el).html(html);
				// hack in here as events arent hooking up
			    $(".button").on("click", function(){
			        window.App.movieView.doSearch()
			    })
		}

    });

    return MovieView;
});