import React from 'react';
import Navication from '../pages/Shaerd/NavicationVar/Navication';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navication></Navication>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;