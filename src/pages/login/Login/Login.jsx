import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('location from state', location);

    const from = location.state?.from?.pathname || '/category/0';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSigin = event => {
        //page jati reload na hoy
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        setError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess('User Logged Successful');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <Container className='w-25 mx-auto bg-light mt-4 p-4'>
            <h4 className='text-center'>Please Login</h4>
            <hr />
            <Form onSubmit={handleSigin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="secondary" type="submit" className='mb-3 form-control'>
                    Login
                </Button>

                <Form.Group className="mb-3">
                    Don't Have An Account ? <Link to="/register">Register</Link>
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

export default Login;