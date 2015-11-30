import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('author');
    // var names = authors.map(function(author){
    //   return author.name;
    // })
    // return names;
  }
  // authors() {
  //   var authors = this.store.findAll('author');
  //   var names = authors.map(function(author){
  //     return author.name;
  //   })
  //   return names;
  // }
});