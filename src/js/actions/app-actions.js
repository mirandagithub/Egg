console.log('begin app-actions');

import AppConstants from '../constants/app-constants.js';
import AppDispatcher from '../dispatchers/app-dispatcher.js';

var AppActions = {
  morningMessage: function(item){
    console.log("AppActions created actions: " + "morning Message");
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MORNING_MESSAGE,
      item: item
    });
  },

  nightMessage: function(item){
    console.log("AppActions created actions: " + "night Message");
    AppDispatcher.handleViewAction({
      actionType: AppConstants.NIGHT_MESSAGE,
      item: item
    });
  },

  addItem: function(item){
    console.log("AppActions created actions: " + "addItem");
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },

 removeItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    });
  },

decreaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      index: index
    });
  },

 increaseItem: function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    });
  }
};


module.exports = AppActions;