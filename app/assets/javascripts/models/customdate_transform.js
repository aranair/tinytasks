App.CustomdateTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    var date, offset;
    if (serialized) {
      date = new Date(serialized);
      // offset = date.getTimezoneOffset();
      // date =  new Date(date.getTime() + offset * 60000);
      return moment(date).format('MMMM D, YYYY');
    } else {
      return null;
    }
  },
  serialize: function(date) {
    if (date) {
      date = new Date(date);
      offset = -date.getTimezoneOffset();
      date =  new Date(date.getTime() + offset * 60000);
      return moment(date);
    } else {
      return null;
    }
  }
});
