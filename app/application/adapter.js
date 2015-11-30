import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: "http://localhost:3000", 
  namespace: "api/v1",
  shouldReloadRecord: function() { return true; },
  shouldReloadAll: function() { return true; },
  shouldBackgroundReloadRecord: function() { return true; },
  shouldBackgroundReloadAll: function() { return true; }
});