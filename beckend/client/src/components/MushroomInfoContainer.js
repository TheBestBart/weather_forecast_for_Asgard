import React from 'react'
import PropTypes from 'prop-types'
import { Mushroom } from '../SVG';

export const MushroomInfoContainer = ({ mushroomInfo = false }) => {
    let { theBestDayToMushroomPickng, percent, statusText } = mushroomInfo;
    let dayInMiliseconds = 86400000;
    let theBestDayInMiliseconds = Date.now() + (dayInMiliseconds * theBestDayToMushroomPickng);
    let theBestDay = theBestDayToMushroomPickng > -1 ? new Date(theBestDayInMiliseconds).toISOString().slice(0,10) : false 

    return (
        <div className='container fade-in'>
            <Mushroom />
            
            <div className='mushroom-element'>
                <p  style={{margin: 0}}>Najlepszy dzień na grzyby:</p>
                <p  style={{margin: 0}}>{theBestDay ? theBestDay : 'brak'}</p> 
            </div>

            <div className='mushroom-element'>
                <p  style={{margin: 0}}>Szansa na wysyp:</p>
                <p  style={{margin: 0}}>{statusText}</p> 
            </div>

            <div className='mushroom-element'>
                <p style={{margin: 0}}>Procentowo:</p>
                <p style={{fontSize: '20px', margin: 0}}>{percent}</p> 
            </div>
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
