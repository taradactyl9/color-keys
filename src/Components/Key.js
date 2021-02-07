import React from 'react';
import _ from 'lodash';
import './Key.css'
import { NOTE_TO_KEY } from './Constants';

class Key extends React.Component {
    noteIsFlat = (note) => {
        return note.length > 1;
      }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }
    handleClick = (note,pressedKeys) => {
      return _.includes(pressedKeys);
    }

    render() {
        let keyClassName = "key";
        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
        const handleClick = (e) => {
          console.log(e)
        }
        if (noteIsFlat) {
          keyClassName += " flat";
        }
        if (keyIsPressed) {
          keyClassName += " pressed";
        }
    
        let key;
        if (noteIsFlat) {
          key = <div className={keyClassName}></div>;
        } else {
          key = (
            <div className={keyClassName} onClick={() => handleClick}>
              <div className="key-text">{this.props.note.toUpperCase()}</div>
            </div>
          );
        }
        return key;
      }
    }
    
    export { Key };