import React from 'react';
//import MessageBox from './components/MessageBox';


var App = React.createClass({
            render:function(){
                return (
                        <BButton>I <BHeart /> React</BButton>
                    )
            }
        });

    var BButton = React.createClass({
            render:function(){
                return <a className="btn btn-primary">{this.props.children}</a>
            }
        });

    var BHeart = React.createClass({
            render:function(){
                return <span className="glyphicon glyphicon-heart"></span>
            }
        });

export default App;
