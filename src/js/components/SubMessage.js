import React from 'react';
const SubMessage = React.createClass({
render: function() {
  return (
    <div>
		{this.props.message}
    </div>
  );
}
});

export default SubMessage;
