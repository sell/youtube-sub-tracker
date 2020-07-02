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
        // console.log(data)
        this.setState({youtube: data.items[0].statistics, loading: false})

    }

    render() {
        // const lossSubCount = 28000000 - this.state.youtube.subscriberCount
        return (
            <div className="sub-count-page">
                
                    <Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card m-b-0 m-t-20">
                                        <img className="card-img-top img-responsive" src="https://yt3.ggpht.com/Al1Cc_VNaYMH_Pu9f3_yRcHI_xCwWC8R5K89L15G8sfR7jYFTon5OKK9X5Uv0hE3l0W2BcJpQp8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" style={{maxHeight: '200px'}} alt="thumbnail" />
                                        <div className="card-body">
                                            <div className="card-block center-image">
                                                <img className='rotate-logo' alt="Shane" src="https://yt3.ggpht.com/a/AATXAJxMp2mWds-xeDubthrwN6BPvxd3zJSVlNX8aY4_FQ=s100-c-k-c0xffffffff-no-rj-mo" style={{marginTop: '-80px'}} />
                                            </div>
                                            <h5 className="card-title text-center sub-count-text">Shane Dawson</h5>
                                            <p className="card-text text-center sub-count-counter">{this.state.loading || !this.state.youtube ? ( <p> loading Data... </p>) : (<CountUp start={0} suffix=" Subs" separator="," end={this.state.youtube.subscriberCount} />)}</p>
                                            <span className="text-center">Subscribers:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-7">
                                            <div className="card mb-nine-px">
                                                <div className="card-block">
                                                    <div className="card-body">
                                                        <div className="position-relative">
                                                            <div className="mt-2 ml-2 white">
                                                                <h1 className="display-5">{this.state.loading || !this.state.youtube ? ( <p> loading Data... </p>) : ( <CountUp start={0} suffix=" Views" separator="," end={this.state.youtube.viewCount} /> )}</h1>
                                                                <span>Total Views:</span>
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
                                                                <h1 className="display-5">{this.state.loading || !this.state.youtube ? ( <p> loading Data... </p>) : ( <CountUp start={0} suffix=" Videos" end={this.state.youtube.videoCount} /> )}</h1>
                                                                <span>Total Videos:</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-12 col-lg-5">
                                                    <div className="card mb-nine-px">
                                                        <div className="card-block">
                                                            <div className="card-body">
                                                                <div className="position-relative">
                                                                    <div className="mt-2 ml-2 white">
                                                                        <h1 className="display-5">{this.state.loading || !this.state.youtube ? ( <p> loading Data... </p>) : ( <CountUp start={0} prefix="-"suffix=" Videos" separator="," end={700 - this.state.youtube.videoCount}/> )}</h1>
                                                                        <span>Total Videos Deleted:</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-7">
                                                    <div className="card mb-nine-px">
                                                        <div className="card-block">
                                                            <div className="card-body">
                                                                <div className="position-relative">
                                                                    <div className="mt-2 ml-2 white">
                                                                        <h1 className="display-5">{this.state.loading || !this.state.youtube ? ( <p> loading Data... </p>) : ( <CountUp start={0} prefix="-"suffix=" Subs" separator="," end={22800000 - this.state.youtube.subscriberCount}/> )}</h1>
                                                                        <span>Total Subs Lost:</span>
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
                            </div>
                        </div>
                    </Fragment>
                

            </div>
        )
    }
}

export default YoutuberCounterr;