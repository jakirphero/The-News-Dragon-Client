import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import Editors from '../editors/Editors';

const News = () => {
    const news = useLoaderData();
    const { title, _id, details, image_url, category_id } = news;
    return (
        <div>
            <h4>Dragon News</h4>
            <Card className='p-4'>
                <Card.Img variant="top" src={image_url} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='mt-4'>
                <h4>Editors Insight</h4>
                <Editors></Editors>
            </div>
        </div>
    );
};

export default News;