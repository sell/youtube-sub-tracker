import React from 'react';
import axios from 'axios'
import CountUp from "react-countup";

let response, account;

class Igsearch extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            details: ''
        }
    }

    getInputRef= el => {
        this.input = el;
    }

    handleButtonClick = async () => {
        const url = `https://instagram.com/${this.input.value}/?__a=1`;
        response = await axios.get(url);
        account = response.data;
        this.setState({
            details: account.graphql.user
        })
        console.log(account)
    }

    render() {
        return(
            <div className='container'>
                <div>{this.state.details.biography}</div>
                <input
                    ref={this.getInputRef}
                    className="form-control"
                    placeholder="ex: 6ix9ine, Drake"
                />
                <button
                    onClick={this.handleButtonClick}
                    className="btn btn-block btn-dark mt-1"
                >
                    Submit
                </button>
                <div className="results-container">
                    <div className="">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card m-b-0 m-t-20">
                                    <img className="card-img-top img-responsive" src='https://www.fonepaw.com/images/topics/instagram/banner.jpg' style={{maxHeight: '200px'}} alt="banner" />
                                    <div className="card-body text-center">
                                        <div className="card-block little-profile p-b-0 center-image">
                                            <div style={{marginTop: '-80px'}}>
                                                <img alt="logo" className="rotate-logo" src={this.state.details.profile_pic_url ? this.state.details.profile_pic_url : 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/13118136_356778611112585_836388753_a.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=1ZTWTeLKPxwAX_joE6u&oh=47862d1b0a51b505228bb935368bb463&oe=5F28863C'} />
                                            </div>

                                            <h3 className="display-6 m-b-15 m-t-10 text-center yt_name">{this.state.details.username ? this.state.details.username : 'Place holder'}</h3>
                                        </div>

                                        <p className="card-text text-center sub-count-counter">{ this.state.details.edge_owner_to_timeline_media ? <CountUp start={0} suffix={' Posts'} end={this.state.details.edge_owner_to_timeline_media.count} /> : 'Place holder'}</p>
                                        <span className="text-center">Total Posts:</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12" id="yt_sharear2">
                                <div className="row">
                                    <div className="col-12 col-lg-7 mb-nine-px">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="card-body">
                                                    <div className="position-relative">
                                                        <div className="mt-2 ml-2 white">
                                                            <h1 className="display-5">{this.state.details.edge_followed_by ? <CountUp start={0} suffix={' Followers'} end={this.state.details.edge_followed_by.count} /> : 'Place holder' }</h1>
                                                            <span>Total Followers:</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="card-body">
                                                    <div className="position-relative">
                                                        <div className="mt-2 ml-2 white">
                                                            <h1 className="display-5">{ this.state.details.edge_follow ? <CountUp end={this.state.details.edge_follow.count} suffix={' Following'}/> : 'Place holder' }</h1>
                                                            <span>Total Following:</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                                <div className="card m-b-0 m-t-20">
                                    <div className="card-body">
                                        <h4>{this.state.details.biography ? this.state.details.biography : 'Place holder'}</h4>
                                        <span>Description:</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Igsearch;