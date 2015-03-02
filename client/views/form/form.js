Template['form'].helpers({
});

Template['form'].events({
});

AutoForm.hooks({
  form: {
    onSuccess: function(){
      Router.go('/');
    }
  }
});
