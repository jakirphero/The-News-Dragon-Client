import React from 'react';
import { useLoaderData, useParams} from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const {id} = useParams();
    const categorizesNews = useLoaderData();
    return (
        <div>
            {id && <h4>This Categorizes: {categorizesNews.length}</h4>}
            {
                categorizesNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Categories;