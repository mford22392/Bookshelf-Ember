import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function() {
    this.route('book', {path: ":book_id"});
  });
  this.route('authors', function() {
    this.route('author', {path: ":author_id"});
  });
  this.route('genres', function() {
    this.route('genre', {path: ':genre_id'});
  });
});

export default Router;
