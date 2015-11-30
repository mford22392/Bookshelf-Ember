import Ember from 'ember';

export default Ember.Controller.extend({
  selectedBook: null,
  selectedAuthor: null,
  actions: {
    setBook(book){
      this.set('selectedBook', book);
    },
    setAuthor(author){
      this.set('selectedAuthor', author);
    }
  }
});
