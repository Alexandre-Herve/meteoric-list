Meteor.subscribe("item");

Template.home.helpers({
  items: function(){
    return item.find();
  },
  photo: function(){
    return Session.get( "image" )
  }
});

Template.home.events({
  'click .remove': function(event){
    item.remove(this._id);
  },
  'click .btn-picture': function(event){
    cb = function(error, data){
      Session.set( "image", data );
    };
    MeteorCamera.getPicture( cb );
  }
});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
    }

    return true;
  });
};
