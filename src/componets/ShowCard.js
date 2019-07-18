import React from 'react'
import PropTypes from 'prop-types'

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`../img/posters/${props.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>

)

ShowCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ShowCard
