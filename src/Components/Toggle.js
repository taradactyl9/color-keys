import React from 'react';

class Toggle extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick}
        className={ this.props.light ? 'light-button' : 'dark-button'}>
          Toggle Color
        </button>
      );
    }
    
}

export { Toggle };