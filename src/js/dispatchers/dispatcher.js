console.log('begin dispatcher');

var Promise = require('es6-promise').Promise;
var assign = require('object-assign');

var _callbacks = [];
var _promises = [];

/**
 * Add a promise to the queue of callback invocation promises.
 * @param {function} callback The Store's registered callback.
 * @param {object} payload The data from the Action.
 */
var _addPromise = function(callback, payload) {
  _promises.push(new Promise(function(resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

/**
 * Empty the queue of callback invocation promises.
 */
var _clearPromises = function() {
  _promises = [];
};

var Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * Register a Store's callback so that it may be invoked by an action.
   * @param {function} callback The callback to be registered.
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function(callback) {
    console.log('store registered callback in dispatcher');
    _callbacks.push(callback);
    //debugger;
    return _callbacks.length - 1; // index
  },

  /**
   * dispatch
   * @param  {object} payload The data from the action.
   */
  dispatch: function(payload) {
    console.log('Dispatcher received payload');
    _callbacks.forEach(function(callback) {
      console.log('Dispatcher initiate store callback + payload, with promises');
      _addPromise(callback, payload);
    });


    Promise.all(_promises).then(_clearPromises);

    console.log('dispatcher get if all store callback are done with promises');
  }

});



module.exports = Dispatcher;
