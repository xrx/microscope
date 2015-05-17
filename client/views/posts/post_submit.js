Template.postSubmit.events({
  'submit form': function(event){
    event.preventDefault();

    var post = {
      title: $(event.target).find("[name=title]").val(),
      url:   $(event.target).find("[name=url]").val()
    };

    Meteor.call('postInsert', post, function(error, result){
      // display the error to the user and abort
      if(error)
        return alert(error.reason);

      if(result.postExists)
        alert("This link has already been posted");
    });

    Router.go('postsList');
    // post._id = Posts.insert(post);
    // Router.go('postPage', post);
  }
})