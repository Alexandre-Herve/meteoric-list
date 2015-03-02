// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/form', function () {
  this.render('form');
});

Router.route('/items/:_id', function () {
  var thatItem = item.findOne({ _id: this.params._id });
  this.render('item', {data: thatItem});
});
