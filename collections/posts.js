Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc){
    // Only logged users!
    return !! userId;
  }
});