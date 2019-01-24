import React from 'react';

const Read = (props) => {
    const cRCheckState = props.currentShelf === 'currentlyReading' && props.location.pathname === '/currently-reading' ? true : false;
    const wRCheckState = props.currentShelf === 'wantToRead' && props.location.pathname === '/want-to-read' ? true : false;
    const rCheckState = props.currentShelf === 'read' && props.location.pathname === '/read' ? true : false;

    if(cRCheckState || wRCheckState || rCheckState) {
        return (
            <h1>Current shelf: {props.currentShelf}</h1>
        )
    }

    if(!cRCheckState) {
        props.handleShelfState('currentlyReading');
    }

    if(!wRCheckState) {
        props.handleShelfState('wantToRead');
    }

    if(!rCheckState) {
        props.handleShelfState('read');
    }
}

export default Read;