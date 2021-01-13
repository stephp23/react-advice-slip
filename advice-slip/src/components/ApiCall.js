import React, { useState, useEffect } from "react";
import axios from "axios";
import Advice from "./Advice"
import { CLIENT_URL } from '../Constants';

const ApiCall = () => {

  const [advice, setAdvice] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CLIENT_URL);
        const { results } = response.data
        setAdvice(results)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
      
  }, [])

  return (
    <h1>
      {advice.maps((adviceItem, index) => {
        const { adviceWord } = adviceItem;
        return <Advice word={adviceWord} key={index} />
      })}
    </h1>
  )
}

export default ApiCall