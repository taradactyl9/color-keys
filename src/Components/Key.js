import React from 'react';
import '../Key.css'

class Key extends React.Component {
    render(){
        return (
            <div className="key">
                <div className="key-text">
                    {this.props.note.toUpperCase()}
                    </div>
            </div>
        );
    }
}

export { Key };