// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require foundation
//= require handlebars
//= require ember
//= require ember-data
//= require showdown
//= require moment.min
//= require pikaday
//= require_self
//= require tinytasks
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
//= require_tree .


$(function() { 
  $(document).foundation(); 
  var token;
  token = $('meta[name="csrf-token"]').attr('content');
  return $.ajaxPrefilter(function(options, originalOptions, xhr) {
    return xhr.setRequestHeader('X-CSRF-Token', token);
  });
});
