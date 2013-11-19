/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MovieDetailView = Backbone.View.extend({
        template: JST['app/scripts/templates/moviedetail.ejs'],
        
		initialize: function(){
		this.el =  "#detail"
		},

		render: function(detail){ 
			var html = this.template(detail);
			$(this.el).html(html);
			    // hack in here as events arent hooking 
			    $(".button").on("click", function(){
			        console.log("click")
			    })
		}

    });

    return MovieDetailView;
});
