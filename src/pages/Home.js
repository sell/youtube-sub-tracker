import React, { useState } from 'react';
import YoutubeCounterr from '../YouTube/ytcounter';
import About from '../components/FAQ';
import FAQ from '../components/About';

function Home() {

    let url = process.env.REACT_APP_INFO
    console.log(url)
    fetch(url)
        .then(results => results.json())
        .then(data => console.log(data.ip))
        return (
            <div>
                <p className="text-center">Down Fall of Shane Dawson</p>
                <YoutubeCounterr />
                <div className="container">
                    <About />
                    <FAQ />
                    
                </div>
            </div>
        )

}

export default Home;