Sfotipy.Views.PlayLists = Backbone.View.extend({
  el: $('#playList'),

  //template: Handlebars.compile($("#playList-template").html()),

  initialize: function () {
  
     this.listenTo(this.collection, "add", this.addOne, this);
  },

  // render: function () {
  //   this.collection.forEach(this.addOne, this);
  // },

 addOne: function (list) {
  //debugger;

     var playListView = new Sfotipy.Views.PlayList({ model: list });
     this.$el.append(playListView.render().el);
   }

});
