Template.postsList.helpers({
  posts: function(){
    return Posts.find({}, {sort: {submitted: -1}});
    // return Posts.find({}, {sort: {submitted: -1}, limit: 1});
    // db.posts.findOne({$query:{}, $orderby:{$natural:-1}});
  }
});