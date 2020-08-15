import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReadyLoader from 'react-loader-spinner'

export default class Loader extends Component {
    static propTypes = {
        type: PropTypes.string,
        color: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
        timeout: PropTypes.number,
        boxClassess: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            display: true
        }
    }

    componentDidMount() {
        let { timeout } = this.props;
        timeout = timeout ? timeout : 5000;

        setTimeout(() => this.setState({display: false}), timeout);
    }

    render() {
        let { type='Puff', color='#262626', height=100, width = 100, timeout = 3000, boxClassess } = this.props;

        return (
        <div style={{display: this.state.display ? 'flex' : 'none'}} className={boxClassess && boxClassess}>
            <ReadyLoader
                type={type}
                color={color}
                height={height}
                width={width}
                timeout={timeout} //3 secs
            />
        </div>
        )
    }
}
