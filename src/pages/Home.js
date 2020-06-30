import React from 'react';
import YoutubeCounterr from '../YouTube/ytcounter';
import About from '../components/FAQ';
import FAQ from '../components/About';

function Home() {


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