import React from 'react';
import _ from 'lodash';
import { Key } from './Key.js';
import '../Piano.css';
import { Notes } from '../global/constants.js'
 
class Piano extends React.Component {
    render () {

        const keys = _.map(Notes, (note, index) => {
            return (
                <Key
                key={index}
                note={note}
                />
            );
        });
        
        return (
            <div className="piano">
               {keys}
            </div>
        );
    }
}

export { Piano };