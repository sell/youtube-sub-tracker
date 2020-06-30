import React from 'react';
import CountUp from 'react-countup'



class Stats extends React.Component {

    state = {
        loading: true,
        stats: null
    }

    async componentDidMount() {
        const url = "https://simpleanalytics.com/trackingdownfall.netlify.app.json";
        const response = await fetch(url)
        const data = await response.json();
        this.setState({
            stats: data,
            loading: false
        })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.stats ? ( <div> loading Data... </div>) : (
                            <div className="text-center"> 
                                Total Web Page Views: <CountUp start={0} end={this.state.stats.pageviews} />
                            </div> 
                        
                        )}
            </div>
        )
    }
}

export default Stats;