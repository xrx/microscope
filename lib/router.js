Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});


Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', { name: 'postSubmit' });

Router.onBeforeAction('dataNotFound', { only: 'postPage' });

// Router.map(function() {
//   this.route('postsList', {path: '/'});
//   this.route('postPage', {
//     path: '/posts/:_id',
//     data: function() { return Posts.findOne(this.params._id); }
//   });
// });