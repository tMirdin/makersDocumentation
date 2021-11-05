import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { documentationContext } from '../../context/DocumentationContext';
import SideBar from '../SideBar/SideBar';
import './TopicDetails.css'

const TopicDetails = (props) => {
    const { getTopicDetails, topicDetails, clickDelete } = useContext(documentationContext)
    useEffect(() => {
        getTopicDetails(props.match.params.id)
    }, []);



    return (
        <div className="container">
            <div className="wrapper">
                <div className="topic-details">
                    {topicDetails.topicTitle ? (
                        <>
                            <Link to='/'>
                                <button onClick={() => clickDelete(props.match.params.id)}>Delete</button>
                            </Link>
                            <h1>{topicDetails.topicTitle}</h1>
                            {topicDetails.subTopics.map((item, index) => (
                                <div className="sub-topic">
                                    <h2>{item.subTopicTitle}</h2>
                                    <p>{item.firstDescription}</p>
                                    <div>
                                        <img src={item.img} alt="topic img" />
                                    </div>
                                    <p>{item.secondDescription}</p>
                                </div>
                            ))}

                            <div className="topic-details_btns">
                                <Link to={`/edit/${topicDetails.id}`}>
                                    <button>
                                        <img src='https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png' alt="edit" />
                                        Редактировать
                                    </button>
                                </Link>
                            </div>

                        </>
                    )
                        : (<h1>LOADING</h1>)
                    }
                </div>
                <SideBar />
            </div>
        </div>
    );
};

export default TopicDetails;