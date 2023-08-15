import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categorizes')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 mt-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
            <Row lg={1} className="g-4">
                <Col>
                    <Card className='border-0 p-2'>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Text>
                            Bayern Slams Authorities Over Flight Delay to Club World Cup
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 p-2'>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Text>
                                Bayern Slams Authorities Over Flight Delay to Club World Cup
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 p-2'>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Text>
                            Bayern Slams Authorities Over Flight Delay to Club World Cup
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;