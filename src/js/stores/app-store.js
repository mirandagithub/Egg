console.log('begin app-store');

var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'; // broadcast change-s


var _catalog = [ // catalog items, maybe external database
    {id: 1, title: 'Widget #1', cost: 1},
    {id: 2, title: 'Widget #2', cost: 2},
    {id: 3, title: 'Widget #3', cost: 3}
  ];

var _cartItems = []; // items in our cart

var _welcomeMessage = '';

function _morningMsg(item){
 _welcomeMessage = 'Miranda ' + item;
};

function _nightMsg(item){
  _welcomeMessage = 'Rick ' + item;
};


function _removeItem(index){
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem(index){
  _cartItems[index].qty++;
}

function _decreaseItem(index){
  if(_cartItems[index].qty>1){
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}


function _addItem(item){
  if(!item.inCart){
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
}


var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    console.log('emitChange');
    this.emit(CHANGE_EVENT);
  },

  /* 
emitter.emit(event[, arg1][, arg2][, ...])#
Execute each of the listeners in order with the supplied arguments.

Returns true if event had listeners, false otherwise.
  */

  addChangeListener: function(callback){
    console.log('addChangeListener in app-store with component callback(setState) func');
    this.on(CHANGE_EVENT, callback); //component to register the store
  },

  removeChangeListener: function(callback){
  console.log('removeChangeListener');

    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart: function(){
    return _cartItems;
  },

  getMsg: function(){
  console.log('get what\'s new from store');
  return _welcomeMessage;
  },

  getCatalog: function(){
    return _catalog;
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    console.log('app-store will do actionType: ' + action.actionType);

    switch(action.actionType){
      case AppConstants.MORNING_MESSAGE:
        console.log('AppStore is doing actions for Morning Msg');
        _morningMsg(payload.action.item);

        break;
      
      case AppConstants.NIGHT_MESSAGE:
      console.log('AppStore is doing actions for Night Msg');
        _nightMsg(payload.action.item);

        break;

      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);

        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;
    }
    AppStore.emitChange();

    return true; // due to it's "promises"
  })
});

module.exports = AppStore;
