import React from 'react';
import AppActions from '../actions/app-actions.js';
var AppStore = require('../stores/app-store.js');

function welcomeMessage(){
      return {message: AppStore.getMsg()};
}


var App = React.createClass({
    getInitialState: function(){
     return { message: 'Hello'};
    },

	componentWillMount: function(){
		console.log('componentWillMount');
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function(){
		console.log('change happened! lets re-draw');
        this.setState( welcomeMessage() );
    },

    handleClickAtMorning: function(){
        console.log('componenent called AppActions for Morning message');
        AppActions.morningMessage('Good Morning to you too.');
    },

    handleClickAtNight: function(){
        console.log('componenent called AppActions for Night Message');
        AppActions.nightMessage('Good Night to you too.');
    },

    handleClick: function(){
        console.log('componenent called appactions for add item');
        AppActions.addItem('this is the item');
    },

    render: function() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <h1 onClick={this.handleClickAtMorning}>Good Morning</h1>
                <h1 onClick={this.handleClickAtNight}>Good Night</h1>
            </div>
            );
    }

});


export default App;
