import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>

    </div>
);

// To set up default values for props we can use defaultProps object like below, we can use it for class based components as well.
Header.defaultProps = {
    'title': 'Indecision'
}

export default Header;