import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  authors: DS.hasMany('author', {async: true}),
  books: DS.hasMany('book', {async: true})
});
