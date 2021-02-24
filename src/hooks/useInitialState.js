import React, {useEffect, useState} from 'react'

const useInitialState = () => {
  let [video, setVideo] = useState([])
  useEffect(() => {
    fetch('../../initialState.json')
    .then(res => res.json())
    .then(data => setVideo(data))
    .catch(err => console.error(err))
  },[video])
  //siempre retornamos el estado de nuestro hook
  return video
}

export default useInitialState