import React from 'react'
import PropTypes from 'prop-types'

export const MushroomInfoContainer = ({ mushroomInfo = false }) => {
    let { theBestDayToMushroomPickng, percent, lastDayOfRainfall, statusText } = mushroomInfo;
  
    return (
        <div className='container fade-in'>
            <p className='title'>{theBestDayToMushroomPickng}</p>
            <div style={{display: 'flex', height: '100%', alignItems: 'center'}}>
               <p style={{marginRight: '10px'}} className='title'>{statusText}</p> {percent}
            </div>
            <p className='title'>{lastDayOfRainfall}</p>
        </div>
    )
}

MushroomInfoContainer.propTypes = {
    mushroomInfo: PropTypes.shape({
        theBestDayToMushroomPicking: PropTypes.number.isRequired,
        lastDayOfRainfall: PropTypes.number.isRequired,
        statusText: PropTypes.string.isRequired,
        percent: PropTypes.string.isRequired
    }).isRequired,
}
