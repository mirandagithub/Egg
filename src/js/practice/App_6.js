import React from 'react';
//import MessageBox from './components/MessageBox';


var App = React.createClass( {

    getInitialState: function(){
        return {
            red: 0,
            green: 0,
            blue: 0
        };
    },

    update: function(){

        this.setState({
            red:this.refs.red.refs.range.getDOMNode().value,
            green:this.refs.green.refs.range.getDOMNode().value,
            blue:this.refs.blue.refs.range.getDOMNode().value
        });
    },



    render: function(){
        //console.log(this.props.txt);

        return (
                        <div>
                            <Sliderr ref="red" update={this.update} />
                            <label>{this.state.red}</label>
                            <Sliderr ref="green" update={this.update} />
                            <label>{this.state.green}</label>
                            <Sliderr ref="blue" update={this.update} />
                            <label>{this.state.blue}</label>
                        </div>
                );
    }
});

        var Sliderr = React.createClass({
        render: function(){
            return (
                            <div>
                                <input 
                                    ref="range"
                                    type="range"
                                    min="0"
                                    max="255"
                                    onChange={this.props.update} />
                            </div>
                );
        }
    });

export default App;
