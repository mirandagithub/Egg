import React from 'react';
//import MessageBox from './components/MessageBox';


var App = React.createClass( {

    getInitialState: function(){
		return {
			txt: '', id: 0
        };
	},

    updateTxt: function(e){
        this.setState({txt: e.target.value});
    },


    /* getDefaultProps() {
        return {
			txt: 'gdfgdfgdf',
            cat: 0
        };
    },

    propTypes: {
            txt: React.PropTypes.string,
            cat: React.PropTypes.number.isRequired
        },
    */

    render: function(){
        //console.log(this.props.txt);

        return (
                <div>
                    <input type="text" onChange= {this.updateTxt}/>
                    <h1>{this.state.txt}</h1>
                    <b>bold</b>
                    </div>
                    );
        }
    });

export default App;
