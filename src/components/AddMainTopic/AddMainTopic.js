import React, { useContext, useEffect, useState } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import '../AddTopics/AddTopics.css'

const AddMainTopic = () => {
    const [title, setTitle] = useState('');
    const { addMainTopic, getTopics } = useContext(documentationContext)
    useEffect(() => {
        getTopics()
    }, [title])

    function handleAddTopic() {
        const newTopic = {
            topicTitle: title,
            subTopics: []
        }
        addMainTopic(newTopic)
        setTitle('')
    }
    return (
        <div className="add-main-topics">
            <input placeholder="Название топика" type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAddTopic}>Добавить</button>
        </div>
    );
};

export default AddMainTopic;