import React from 'react';
import Header from '../pages/Shaerd/Header/Header';
import Footer from '../pages/Shaerd/Footer/Footer';
import {Container, Row, Col} from 'react-bootstrap'
import LeftNav from '../pages/Shaerd/LeftNav/LeftNav';
import RightNav from '../pages/Shaerd/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Navication from '../pages/Shaerd/NavicationVar/Navication';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navication></Navication>
            <Container className='mt-4'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;