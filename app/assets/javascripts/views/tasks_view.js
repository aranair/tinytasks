App.TasksView = Ember.View.extend();

App.DateField = Ember.TextField.extend({
  didInsertElement: function() {
    return this.$().datepicker({
      dateFormat: 'MM d, yy',
      numberOfMonths: 2,
      showButtonPanel: true
    });
  }
});

// App.CalendarView = Ember.TextField.extend({
//   _picker: null,
 
//   modelChangedValue: function(){
//     var picker = this.get("_picker");
//     if (picker){
//       picker.setDate(this.get("value"));
//     }
//   }.observes("value"),
 
//   didInsertElement: function(){
//     currentYear = (new Date()).getFullYear();
//     formElement = this.$()[0];
//     picker = new Pikaday({
//       field: formElement,
//       yearRange: [1900,currentYear+2]
//     });
//     this.set("_picker", picker);
//   },
 
//   willDestroyElement: function(){
//     picker = this.get("_picker");
//     if (picker) {
//       picker.destroy();
//     }
//     this.set("_picker", null);
//   }
// });
