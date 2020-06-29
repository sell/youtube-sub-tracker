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
            message: '',
            querySearch: ''
        }

        this.cancel = '';
    }

    fetchSearchResults = ( query ) => {
        const { api_key } = config
        // let forUsername = 'forUsername';
        const searchUrl =  `https://www.googleapis.com/youtube/v3/channels?part=statistics%2CcontentDetails%2CbrandingSettings%2Csnippet&id=${query}&key=${api_key}`
        const searchUrlChannel = `https://www.googleapis.com/youtube/v3/channels?part=statistics%2CcontentDetails%2CbrandingSettings%2Csnippet&forUsername=${query}&key=${api_key}`
        if ( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        } )
            .then( res => {
                // console.log(res.data.items[0])

                const resultNotFoundMsg = ! res.data.items[0]
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
                        message: 'Failed to fetch the data.',
                    })
                }
            }) 

            // delete this one if errors occur, this is the channel url

            axios.get( searchUrlChannel, {
                cancelToken: this.cancel.token
            } )
                .then( res => {
                    // console.log(res.data.items[0])
    
                    const resultNotFoundMsg = ! res.data.items[0]
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
                            message: 'Failed to fetch the data.',
                        })
                    }
                }) 
    }
    renderSearchResults = () => {
        const { results } = this.state;
        
        if ( results ) {
            return (
                <div className="results-container">
                    <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card m-b-0 m-t-20">
                                        <img className="card-img-top img-responsive" src={results.brandingSettings ? results.brandingSettings.image.bannerImageUrl : 'https://akshatmittal.com/youtube-realtime/assets/images/banner.jpg'} style={{maxHeight: '200px'}} alt="banner" />
                                        <div className="card-body text-center">
                                            <div className="card-block little-profile p-b-0 center-image">
                                                <div style={{marginTop: '-80px'}}>
                                                    <img alt="logo" className="rotate-logo" src={results.snippet ? results.snippet.thumbnails.default.url : 'https://yt3.ggpht.com/a/AATXAJzG_RzzNheUdAPucOTvaB4VKLsw8NP8iMpM8rC4eQ=s100-c-k-c0xffffffff-no-rj-mo'} />
                                                </div>

                                                <h3 className="display-6 m-b-15 m-t-10 text-center yt_name">{results.snippet ? results.snippet.title : `PewDiePie`}</h3>
                                            </div>
                                            
                                            <p className="card-text text-center sub-count-counter">{results.statistics ? <CountUp start={0} separator={','} suffix=" Subs" end={results.statistics.subscriberCount} /> : <CountUp start={0} separator={','} suffix=" Subs" end={105000000} /> }</p>
                                            <span className="text-center">Subscribers:</span>
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
                                                                <h1 className="display-5">{results.statistics ? <CountUp start={0} separator={','} suffix=" Views" end={results.statistics.viewCount} /> : <CountUp start={0} separator={','} suffix=" Views" end={25946888373} />}</h1>
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
                                                                <h1 className="display-5">{results.statistics  ? <CountUp start={0} suffix=" Videos"  separator={','} end={results.statistics.videoCount} /> : <CountUp start={0} suffix=" Videos"  separator={','} end={4181} /> }</h1>
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
                                        <h4>{results.snippet ? results.snippet.description : 'I make videos.'}</h4>
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

    
    formChange = ( event ) => {
        
        this.setState({querySearch: event.target.value})
        // let querySearch = event.target.value;
        // console.log(querySearch)

    }
    
    handleOnInputChange = ( ) => {
        
        const query = this.state.querySearch;
        // console.log(query)
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
        let querySearch;
        return (
            <div className="search-channels">
                <div className="container">
                    <label htmlFor="query"> 
                        If channel has a custom url like this: 'https://www.youtube.com/user/PewDiePie', you enter <strong>PewDiePie</strong>.
                        <br></br>
                        If channel has url like this: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw', you enter <strong>UC-lHJZR3Gqxm24_Vd_AJ5Yw</strong>
                        <br></br>
                        Search Channel by ID or by Channel Custom URL Name:
                    </label>
                    <form className="form mb-2">
                        <input
                            type="text"
                            value={querySearch}
                            name="query"
                            id="search-input"
                            onChange={this.formChange}
                            className="form-control"
                            placeholder="ex: UC-8QAzbLcRglXeN_MY9blyw, pewdiepie"
                        />

                        <button type="button" className="btn btn-block btn-dark mt-1" value={query} onClick={this.handleOnInputChange}>Submit</button>
                        
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