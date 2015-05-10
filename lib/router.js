Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

// Router.map(function() {
//   this.route('postsList', {path: '/'});
//   this.route('postPage', {
//     path: '/posts/:_id',
//     data: function() { return Posts.findOne(this.params._id); }
//   });
// });