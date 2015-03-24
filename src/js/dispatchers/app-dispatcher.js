console.log('begin app-dispatcher');

var Dispatcher = require('./lib/Dispatcher.js');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {
  handleViewAction: function(action){
	console.log('AppDispacher dispatch payload from handleViewAction');
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});


module.exports = AppDispatcher;
