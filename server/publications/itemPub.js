Meteor.publish('item', function() {
  return item.find();
});
