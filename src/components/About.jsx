import React from 'react';

function About() {
    return (
        <div>
            <div className="row mt-2">
                        <div className="col-12 col-lg-12">
                            <div className="card">
                                <div className="card-block">
                                    <div>
                                        <h3 className="card-title text-center">About:</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="position-relative">
                                            <div className="ml-2 white">
                                                <div className="bd-callout bd-callout-warning">
                                                    <p>This a tracker that shows the live sub count, and other data about youtubers.</p>
                                                    <p>The data is very actuarte, and very reliable, as we pull data straight from googles API!</p>
                                                    <p>Ways to search: </p>
                                                    <ul>
                                                        <li>Channel ID: <strong>(UCK8sQmJBp8GCxrOtXWBpyEA)</strong></li>
                                                        <li>Channel URL Username: (youtube.com/<strong>PewDiePie</strong>)</li>
                                                    </ul>
                                                </div>
                                                <span>About</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default About;