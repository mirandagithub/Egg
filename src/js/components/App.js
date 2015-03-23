import React from 'react';
import AppActions from '../actions/app-actions.js';


var App = React.createClass({

    handleClick: function(){
        AppActions.addItem('this is the item');
    },

    render: function() {
        return (
            <h1 onClick={this.handleClick}>MY FLUX APP</h1>
        );
    }

});


export default App;
