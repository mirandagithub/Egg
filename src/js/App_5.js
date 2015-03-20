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



    render: function(){
        //console.log(this.props.txt);

        return (
                <div>
                <Widget txt={this.state.txt} update={this.updateTxt} />
                <Widget txt={this.state.txt} update={this.updateTxt} />
                <Widget txt={this.state.txt} update={this.updateTxt} />
                <Widget txt={this.state.txt} update={this.updateTxt} />
                </div>
                );
        }
});

    var Widget = React.createClass({
        render: function(){
            return (
                <div>
                    <input type="text" onChange= {this.props.update}/>
                    <h1>{this.props.txt}</h1>
                    <b>bold</b>
                </div>
                );
        }
    });

export default App;
