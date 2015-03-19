import React from 'react';
import MessageBox from './components/MessageBox';

var App = React.createClass({

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<MessageBox />
			</div>
		);
	}

});

export default App;
