import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Rageistar = () => {
    
    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);
        setError('');
        setSuccess('');

        if (password.length < 6) {
            setError('Password must be 6 Characters');
            return;
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user
            console.log(createdUser);
            form.reset();
            setSuccess('Successful Register!!!')
        })
        .catch(error => {
            console.log(error)
            setError(error.massage)
        })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <Container className='w-50 mx-auto bg-light rounded mt-4 p-4'>
            <h4 className='text-center'>Register your Account</h4>
            <hr/>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text"  name="photo" placeholder="Photo URL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    label={<>Accept <Link to="/terms">terms & condition</Link>
                    </>} 
                    name="accept" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted} className='mb-3 form-control'>
                    Register
                </Button>
                
                <Form.Group className="mb-3">
                    Already have An Account ? <Link to="/login">Login</Link>
                </Form.Group>

                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>

                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Rageistar;