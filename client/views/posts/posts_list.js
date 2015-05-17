Template.postsList.helpers({
  posts: function(){
    // sorting by submitted(date) does not seem to work
    return Posts.find({}, { sort: {title: -1}});
    // return Posts.find({}, {sort: {submitted: -1}, limit: 1});
    // db.posts.findOne({$query:{}, $orderby:{$natural:-1}});
  }
});