Meteor.publish('posts', function() {
  return Posts.find({}, {fields: { title: true,
                                   userId: true,
                                   author: true,
                                   url: true }});
});