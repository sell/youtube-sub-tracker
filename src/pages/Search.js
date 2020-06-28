import React from 'react';
import axios from 'axios'
import config from '../YouTube/config';
import CountUp from 'react-countup'
import Loader from '../images/loader.gif'
class Search extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }

    fetchSearchResults = ( query ) => {
        const { api_key } = config
        const searchUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics%2CcontentDetails%2Csnippet&id=${query}&key=${api_key}`

        if ( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        } )
            .then( res => {
                // console.log(res.data.items[0])

                const resultNotFoundMsg = ! res.data
                    ? 'There are no more search results, please try a new channel'
                    : '';
                this.setState( {
                    results: res.data.items[0],
                    message: resultNotFoundMsg,
                    loading: false
                })

                // console.log(this.state)
                
            })
            .catch( error => {
                if (axios.isCancel(error) || error ) {
                    this.setState( {
                        loading: false,
                        message: 'Failed to fetch the data.'
                    })
                }
            }) 
    }
    renderSearchResults = () => {
        const { results, loading, message } = this.state;
    
        if ( results ) {
            return (
                
                <div className="results-container">
                    <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card m-b-0 m-t-20">
                                        <img className="card-img-top img-responsive" src={results.snippet ? results.snippet.thumbnails.default.url : 'https://akshatmittal.com/youtube-realtime/assets/images/banner.jpg'} style={{maxHeight: '150px'}} alt="banner" />
                                        <div className="card-body text-center">
                                            <div className="card-block center-image">
                                                <img alt="logo" src={results.snippet ? results.snippet.thumbnails.default.url : ''} />
                                            </div>
                                            <h5 className="card-title text-center sub-count-text">{results.snippet ? results.snippet.title : ''}</h5>
                                            <p className="card-text text-center sub-count-counter">{results.statistics ? <CountUp start={0} separator={','} end={results.statistics.subscriberCount} /> : '' }</p>
                                            <span className="text-center">Subscribers:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12" id="yt_sharear2">
                                    <div className="row">
                                        <div className="col-12 col-lg-7">
                                            <div className="card">
                                                <div className="card-block">
                                                    <div className="card-body">
                                                        <div className="position-relative">
                                                            <div className="mt-2 ml-2 white">
                                                                <h1 className="display-5">{results.statistics ? <CountUp start={0} separator={','} end={results.statistics.viewCount} /> : ''}</h1>
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
                                                                <h1 className="display-5">{results.statistics  ? <CountUp start={0} separator={','} end={results.statistics.videoCount} /> : ''}</h1>
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
                            <div className="row mt-2">
                                <div className="col-sm-12">
                                    <div className="card m-b-0 m-t-20">
                                        <div className="card-body">
                                        <h4>{results.snippet ? results.snippet.description : ''}</h4>
                                        <span>Description:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
    }

    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        /* this.setState({query: query, loading: true, message: ''}, () => {
            this.fetchSearchResults( query);
        }) */
        if ( !query) {
            this.setState( {
                query,
                results: {},
                message: ''
            })
        } else {
            this.setState({query: query, loading: true, message: ''}, () => {
                this.fetchSearchResults( query);
            })
        }
        
    }

    
    render() {

        const { query, loading, message } = this.state;
        return (
            <div className="search-channels">
                <div className="container">
                    <label for="query">Search Channel by ID: </label>
                    <form className="form mb-1">
                        <input
                            type="text"
                            value={query}
                            name="query"
                            id="search-output"
                            onChange={this.handleOnInputChange}
                            class="form-control"
                            placeholder="ex: UC-8QAzbLcRglXeN_MY9blyw"
                        />
                    </form>
                </div>
                {message && <p className="message text-center">{message}</p>}
                <div className="text-center">
                    <img src={Loader} className={`search-loading ${ loading ? 'show' : 'hide'}`} alt="loader" />
                </div>
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default Search;