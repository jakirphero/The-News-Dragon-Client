import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bg from '../../../assets/bg.png'
import Qjhone from '../Qjhone/Qjhone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-2 px-4 w-100 mt-4'> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary" className='px-4 w-100'><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qjhone></Qjhone>
            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='bg-danger py-2 text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;