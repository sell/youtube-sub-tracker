import React, { Fragment } from 'react'
import config from './config'
import CountUp from 'react-countup'

class YoutuberCounterr extends React.Component {
    state = {
        loading: true,
        youtube: null
    }

    async componentDidMount() {
        const { api_key, channel_id } = config
        const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
        const response = await fetch(apiCall)
        const data = await response.json();
        console.log(data)
        this.setState({youtube: data.items[0].statistics, loading: false})
    }

    render() {
        return (
            <div className="sub-count-page">
                {this.state.loading || !this.state.youtube ? ( <div> loading Data... </div>) : (
                    <Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card m-b-0 m-t-20">
                                        <img className="card-img-top img-responsive" src="https://akshatmittal.com/youtube-realtime/assets/images/banner.jpg" style={{maxHeight: '150px'}} alt="thumbnail" />
                                        <div className="card-body">
                                            <div className="card-block center-image">
                                                <img alt="Shane" src="https://yt3.ggpht.com/a/AATXAJxMp2mWds-xeDubthrwN6BPvxd3zJSVlNX8aY4_FQ=s100-c-k-c0xffffffff-no-rj-mo" />
                                            </div>
                                            <h5 className="card-title text-center sub-count-text">Shane Dawson</h5>
                                            <p className="card-text text-center sub-count-counter"><CountUp start={0} suffix=" Subs" separator="," end={this.state.youtube.subscriberCount} /></p>
                                            <span className="text-center">Subscribers:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-12" id="yt_sharear2">
                                    <div class="row">
                                        <div class="col-12 col-lg-7">
                                            <div class="card">
                                                <div class="card-block">
                                                    <div class="card-body">
                                                        <div class="position-relative">
                                                            <div class="mt-2 ml-2 white">
                                                                <h1 className="display-5"><CountUp start={0} suffix=" Views" separator="," end={this.state.youtube.viewCount} /></h1>
                                                                <span>Total Views:</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-5">
                                            <div class="card">
                                                <div class="card-block">
                                                    <div class="card-body">
                                                        <div class="position-relative">
                                                            <div class="mt-2 ml-2 white">
                                                                <h1 class="display-5"><CountUp start={0} suffix=" Videos" end={this.state.youtube.videoCount} /></h1>
                                                                <span>Total Videos:</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}

            </div>
        )
    }
}

export default YoutuberCounterr;