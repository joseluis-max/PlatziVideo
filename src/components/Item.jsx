import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/Item.scss'
import playIcon from '../assets/static/play-icon.png'

function Item ({data}){
  return(
  <div className="carousel-item">
    <img className="carousel-item__img" src={data.cover} alt=""  />
    <div className="carousel-item__details">
      <div> 
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src={playIcon} alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{data.title}</p>
      <p className="carousel-item__details--subtitle">{data.year+" "+ data.contentRating +" "+data.duration}minutos</p>
    </div>
  </div>
  )
}
//valida que los parametros enviados sean del mismo tipo que los esperados
Item.propTypes = {
  data:PropTypes.object.isRequired // parametro obligatorio sin isRequired se vuelve opcional
}
export default Item