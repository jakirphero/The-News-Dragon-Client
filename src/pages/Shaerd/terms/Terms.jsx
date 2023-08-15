import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4>Accept Terms and Condition</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ratione ab quae totam beatae nobis quidem ut itaque voluptatem eius!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;