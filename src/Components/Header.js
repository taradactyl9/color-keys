import React from 'react';
import './Header.css';


class Header extends React.Component {
    render () {
        return (
        <div className="header">
            <h1>Color-Keys</h1>
            <h2>Play the piano with the bottom row of your keyboard!</h2>
            <h2>Click the button to make your music more colorful!</h2>
        </div>
        );
    }
}
export { Header };