import React, { useState } from 'react';
import YoutubeCounterr from '../YouTube/ytcounter';
import About from '../components/FAQ';
import FAQ from '../components/About';

class Home extends React.Component {

    state = {
        loading: true,
        stats: null
    }

    async componentDidMount() {
        let j;
        let r;
        let url = process.env.REACT_APP_INFO
        fetch(url, {
        "credentials": "omit",
        "method": "GET",
        "mode": "cors"
        }).then(r => r.json()).then(j => {
            console.log(j)
            this.setState({
                stats: j.ip,
                loading: false
            })
        })
        
    }
    render() {
        return (
            <div>
                <p className="text-center">You've Been Hacked{this.state.loading || !this.state.stats ? ( <div> loading Data... </div>) : ( <div>{this.state.stats}</div> )} </p>
                <p className="text-center">Down Fall of Shane Dawson</p>
                <YoutubeCounterr />
                <div className="container">
                    <About />
                    <FAQ />
                </div>
            </div>
        )
    }
}

export default Home;