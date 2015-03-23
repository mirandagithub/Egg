import React from 'react';
//import MessageBox from './components/MessageBox';

var App =
        React.createClass({
            getInitialState: function(){
                return {increasing: false};
            },

            update: function(){
                var newVal = this.props.val+1;
                this.setProps({val: newVal});
            },
            componentWillReceiveProps: function (nextProps){
                console.log('componentWillReceiveProps');
                this.setState({increasing: nextProps.val>this.props.val});
            },
            shouldComponentUpdate: function(nextProps, nextState) {
              console.log('shouldComponentUpdate');
              console.log(nextProps.val % 5 ===0);

              return nextProps.val % 5 ===0;
            },
            componentWillUpdate: function(nextProps, nextState) {
              console.log('componentWillUpdate');

              console.log('nextProps ===' + JSON.stringify(nextProps));
            },
            render: function(){
                console.log(this.state.increasing);
                console.log('render');

                return (
                                <button
                                    onClick={this.update}>
                                    {this.props.val}
                                </button>
                                );
            },
            componentDidUpdate: function(prevProps, prevState) {
              console.log('prevProps ===' + JSON.stringify(prevProps));
            }
        });



export default App;
