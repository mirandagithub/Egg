import React from 'react';
//import MessageBox from './components/MessageBox';

    var App = React.createClass({
        getInitialState: function(){
            return {
                red: 0
            };
        },
        update: function(){
            this.setState({
                red: this.refs.red.refs.range.getDOMNode().value
            });
        },
        render: function(){
            return (
                        <div>
                            <NumInput
                                 ref="red"
                                 min={0}
                                 max={255}
                                 step={10}
                                 val={+this.state.red}
                                 update={this.update}
                                 label="Red"
                                 type="number"
                             />
                        </div>
                );
        }
    });

    var NumInput = React.createClass({
        propTypes: {
            min: React.PropTypes.number,
            max: React.PropTypes.number,
            step: React.PropTypes.number,
            val: React.PropTypes.number,
            label: React.PropTypes.string,
            update: React.PropTypes.func.isRequired,
            type: React.PropTypes.oneOf(['number','range'])
        },
        getDefaultProps: function(){
            return {
                min: null,
                max: null,
                val: 0,
                step: 1,
                label: '',
                type: 'range'
            };
        },
        render: function(){
            var label = this.props.label!=='' ?
                <label>{this.props.label} : {this.props.val}</label> : ''
            return (
                            <div>
                                <input
                                    ref="range"
                                    defaultValue={this.props.val}
                                    {...this.props} />
                                    {label}
                            </div>
                );
        }
    });

export default App;
