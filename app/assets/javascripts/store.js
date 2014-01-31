App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
});

// App.TaskSerializer = DS.RESTSerializer.extend({
//   normalize: function(type, hash, property) {
//   },

//   extractArray: function(store, type, payload) {
//     var taskList = payload.tasks;
//     var all_subtasks = [];

//     for(var i = 0; i < taskList.length; i++) {
//       console.log(taskList[i].subtasks);
//       var subtasks = taskList[i].subtasks;
//       console.log(subtasks);
//       all_subtasks << subtasks;
//       subtask_ids = subtasks.mapProperty('id');
//       taskList[i].subtasks = subtask_ids;
//     }
//     console.log(all_subtasks);  
//     return this._super(store, type, payload)
//   },

//   extractSingle: function(store, type, payload, id, requestType) {
//     console.log('extract single')
//     var task = {}, subtaskIds = [];

//     task.id = payload.id;
//     task.name = payload.name;
//     // task._links = { user: payload._links.mapProperty('user').findProperty('href').href };

//     // Leave the original un-normalized subtasks alone, but put them
//     // in the right place in the payload. We'll normalize the subtasks
//     // below in `normalizeHash`
//     var subtasks = payload._embedded.subtasks;
//     task.subtasks = subtasks.mapProperty('id');

//     var task_payload = { task: task, subtasks: subtasks };

//     return this._super(store, type, task_payload, id, requestType);
//   },

//   normalizeHash: {
//     subtasks: function(hash) {
//       // return { id: hash.ID_, body: hash.CMT_BODY };
//     }
//   }
// });
// App.ApplicationSerializer = DS.RESTSerializer.extend({
//   normalize: function(type, hash, property) {
//     var normalized = {}, normalizedProp;

//     for (var prop in hash) {
//       if (prop.substr(-3) === '_id') {
//         // belongsTo relationships
//         normalizedProp = prop.slice(0, -3);
//       } else if (prop.substr(-4) === '_ids') {
//         // hasMany relationship
//         normalizedProp = Ember.String.pluralize(prop.slice(0, -4));
//       } else {
//         // regualarAttribute
//         normalizedProp = prop;
//       }

//       normalizedProp = Ember.String.camelize(normalizedProp);
//       normalized[normalizedProp] = hash[prop];
//     }

//     return this._super(type, normalized, property);
//   }
// });

