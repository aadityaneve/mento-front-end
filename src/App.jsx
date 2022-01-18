import './App.css';
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllTopics, getAllTopicsDetails } from './features/actions'

function App() {

  const { allTopics, allTopicsDetails } = useSelector((state) => state)
  console.log('allTopicsDetails:', allTopicsDetails)
  console.log('allTopics:', allTopics)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTopics());
    dispatch(getAllTopicsDetails());

  }, [])

  return (
    <div className="App">
      HII
    </div>
  );
}

export default App;
