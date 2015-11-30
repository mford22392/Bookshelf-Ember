import Ember from 'ember';

export default Ember.Controller.extend({
  selectedBook: null,
  actions: {
    setBook(book){
      this.set('selectedBook', book);
    }
  }
});
