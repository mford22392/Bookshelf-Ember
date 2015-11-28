import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  authorId: DS.attr('number'),
  author: DS.belongsTo('author', {async: true}),
  genres: DS.hasMany('genre', {async: true})
});
