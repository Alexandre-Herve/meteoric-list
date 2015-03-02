item = new Mongo.Collection('item');

item.attachSchema(
    new SimpleSchema({
      title: {
        type: String
      },
      content: {
        type: String
      }
    })
);

Meteor.methods({
  addItem: function( title, content ){
    check(title, String);
    check(content, String);
    item.insert({
      title: title,
      content: content,
      createdAt: new Date()
    });
  }
});

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  item.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
