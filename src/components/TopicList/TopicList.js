import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { documentationContext } from '../../context/DocumentationContext';
import TopicCard from '../TopicCard/TopicCard';
import './TopicList.css'

const TopicList = () => {
    const { getTopics, topicsList } = useContext(documentationContext);

    useEffect(() => {
        getTopics()
    }, [])
    return (
        <div>
            <div className="add-topic">
                <Link to='/add'>
                    <button>+ Добавить тему</button>
                </Link>
            </div>
            <div className="list">
                {topicsList.map(item => (
                    <TopicCard key={item.id} id={item.id} item={item.topicTitle} />

                ))}
            </div>
        </div>
    );
};

export default TopicList;