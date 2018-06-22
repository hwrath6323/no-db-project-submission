import React, {Component} from 'react';
import axios from 'axios';

//import './components/FeaturedMedia.css';

class FeaturedMedia extends Component {
    constructor(){
        super();

        this.state = {
            featMedia: []
        }
    }


    componentDidMount(){
        axios.get(`/album-info/${this.props.id}`)
            .then(response => {
                console.log(response.data)
                this.setState({featMedia:response.data});
            })
            .catch(err => console.warn(err));
    }
    



    render(){
        return(
            <div className='media-container'>
                <div className='artist=info'>
                    <br/>
                    <h2>{this.state.featMedia.title}</h2>
                    <h4>{this.state.featMedia.artists_sort}</h4>
                    <h5>{this.state.featMedia.country}</h5>
                    <h5>{this.state.featMedia.genres}</h5>
                    <h5>{this.state.featMedia.year}</h5>
                    <h6>{this.state.featMedia.uri}</h6>
                </div>
            </div>
        )
    }




}

export default FeaturedMedia;