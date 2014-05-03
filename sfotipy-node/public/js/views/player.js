Sfotipy.Views.Player = Backbone.View.extend({
  el: $(".music"),
  events:{
  	  'click .play':'play'
  },

  template: Handlebars.compile($("#player-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
  	//debugger;
    var song = this.model.toJSON();
    this.$el.html(this.template(song));
  },

  play: function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    var sound = document.getElementById("audioPlay");
    sound.play()
    //debugger;


  }
});
