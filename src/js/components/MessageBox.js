 import React from 'react';
 import SubMessage from './SubMessage';

 var MessageBox = React.createClass({

    getInitialState: function () {
      return {
        titleMessage: 'Today is a good day.',
        messages: [
                    'I like the world',
                    'Coffee flavored ice cream is highly underrated',
                    'My spoon is too big',
                    'Tuesday is coming. Did you bring your coat?',
                    'I am a banana'
                  ]
      };
    },

    render: function() {
      var messages = this.state.messages.map(
        function(message) {
          return (
            <SubMessage message={message} />
            );
        }
      );
      console.log(this.state.titleMessage);
      return (
        <div>
          <h2>{ this.state.titleMessage }</h2>
          { messages }
        </div>
      );
    }
  });

 export default MessageBox;
