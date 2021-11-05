import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const documentationContext = createContext();

const INIT_STATE = {
  topicsList: [],
  topicDetails: {}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, topicsList: action.payload }
    case "GET_TOPIC_DETAILS":
      return { ...state, topicDetails: action.payload }
    default:
      return state
  }

}

const DocumentationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addMainTopic(topic) {
    await axios.post('http://localhost:8000/topics', topic)
  }

  async function getTopics() {
    const { data } = await axios('http://localhost:8000/topics');
    dispatch({
      type: "GET_TOPICS",
      payload: data
    })
  }

  async function addSubTopic(newSubTopic, id) {
    let item = state.topicsList.find(item => item.id == id)
    item.subTopics.push(newSubTopic);
    await axios.patch(`http://localhost:8000/topics/${id}`, item)
    getTopics()
  }


  async function getTopicDetails(id) {
    const { data } = await axios(`http://localhost:8000/topics/${id}`);
    dispatch({
      type: "GET_TOPIC_DETAILS",
      payload: data
    })
  }

  const clickDelete = async (id) => {
    let { data } = await axios(`http://localhost:8000/topics/${id}`)

    await axios.delete(`http://localhost:8000/topics/${id}`, { data })
    getTopics()
  }

  async function editTopicDetails(newTopic) {
    await axios.patch(`http://localhost:8000/topics/${newTopic.id}`, newTopic)
    getTopics()
  }

  return (
    <documentationContext.Provider value={{
      topicsList: state.topicsList,
      topicDetails: state.topicDetails,
      getTopics,
      addMainTopic,
      addSubTopic,
      getTopicDetails,
      clickDelete,
      editTopicDetails
    }}>
      {children}
    </documentationContext.Provider>
  );
};

export default DocumentationContextProvider;