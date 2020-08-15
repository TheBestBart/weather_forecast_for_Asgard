import React from 'react'
import PropTypes from 'prop-types'
import { Sunny, Cloudly, Rainly } from '../SVG';

export const Container = ({ weatherForecast = false, day = 0 }) => {
    let { status, statusText, degree } = weatherForecast;
    let icon = status === 2 ? <Rainly /> : status === 1 ? <Cloudly /> : <Sunny />
    let dayInMiliseconds = 86400000;
    let date = new Date(Date.now() + (day * dayInMiliseconds)).toISOString().slice(0, 10)

    return (
        <div className='container fade-in'>
            <p className='title'>{date}</p>
            <div style={{display: 'flex', height: '100%', alignItems: 'center'}}>
               <p style={{marginRight: '10px'}} className='title'>{statusText}</p> {icon}
            </div>
            <p className='title'>{degree}&#176;{'C'}</p>
        </div>
    )
}

Container.propTypes = {
    weatherForecast: PropTypes.shape({
        degree: PropTypes.number.isRequired,
        status: PropTypes.number.isRequired,
        statusText: PropTypes.string.isRequired
    }).isRequired,
    day: PropTypes.number,
}
