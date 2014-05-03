Sfotipy.Views.PlayList = Backbone.View.extend({
	tagName:'div',
	className:'playlists',
	events:{
		'click .name': 'selectPlayList'
	},
	template: Handlebars.compile($("#playList-template").html()),
	initialize:function(){
		//debugger;
		this.listenTo(this.model,"change",this.render,this);
	},

	render:function(){
		var playList = this.model.toJSON();
		var html = this.template(playList);
		this.$el.html(html);
		return this;
	},
	
	selectPlayList:function(){
		//debugger;
		Sfotipy.app.navigate("playList/"+ this.model.get("name"),{trigger:true })

		//alert("HOLA");

	}


});