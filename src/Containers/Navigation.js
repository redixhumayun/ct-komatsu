import React, { Component } from 'react';
import NavigationComponent from '../Components/Navigation';

const Navigation = (props) => {
    const { children } = props;
    return (
            <NavigationComponent children={children}/>
        );
};

export default Navigation;