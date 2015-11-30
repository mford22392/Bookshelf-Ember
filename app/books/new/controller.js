import Ember from 'ember';

export default Ember.Controller.extend({
  authors() {
    var authors = this.store.findAll('author');
    var names = authors.map(function(author){
      return author.name;
    })
    return names;
  },
  actions: {
    save() {
      var newtitle = this.get('newTitle');
      var book = this.store.createRecord('book', {
        title: newtitle
        // authorId: this.store.findRecord('author', {name: authorName}).id

      });
        book.save().then(() => {
        this.transitionTo('books');
      });
    },
    cancel() {
      this.transitionTo('books');
    }
  }
});
