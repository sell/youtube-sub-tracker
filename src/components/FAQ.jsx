import React from 'react';

function FAQ() {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-12 col-lg-12">
                    <div className="card">
                        <div className="card-block">
                            <div>
                                <h3 className="card-title text-center">Frequently Asked Questions:</h3>
                            </div>
                            <div className="card-body">
                                <div className="position-relative">
                                    <div className="ml-2 white">
                                        <div className="bd-callout bd-callout-warning">
                                            Why are sub counts rounded? As of september of 2019, youtube made the api sub count be rounded.
                                        </div>
                                        <div className="bd-callout bd-callout-warning">
                                            How come I cannot search by channel name? This will be implemented soon.
                                            <ul className="mb-0">
                                                <li>You can search with channel url name</li>
                                            </ul>
                                        </div>
                                        <span>F.A.Q</span>
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

export default FAQ;