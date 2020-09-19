import React from 'react';
import Menu from './Menu/Menu';

const AppLayout = (props) => {
    return (
        <div className="App">
            <Menu />
            {props.children}
        </div>

    );
}

export default AppLayout;