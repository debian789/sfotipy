Sfotipy.Views.Player = Backbone.View.extend({
  el: $(".music"),
  events:{
  	  'click .playSound':'play',
      'click .pauseSound':'pause'
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
    this.$el.find('.playSound').hide();
    this.$el.find('.pauseSound').show();

    sound.play();
  },
  pause:function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    var sound = document.getElementById("audioPlay");
    this.$el.find('.pauseSound').hide();
    this.$el.find('.playSound').show();
    sound.pause();
    

  }
});
