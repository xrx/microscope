Template.postSubmit.events({
  'submit form': function(event){
    event.preventDefault();

    var post = {
      title: $(event.target).find("[name=title]").val(),
      url:   $(event.target).find("[name=url]").val()
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
})