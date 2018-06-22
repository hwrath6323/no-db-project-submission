import React, {Component} from 'react';
import axios from 'axios';

//import './components/FeaturedMedia.css';

class FeaturedMedia extends Component {
    constructor(){
        super();

        this.state = {
            featMedia: ''
        }
    }


    componentDidMount(){
        axios.get(`https://api.discogs.com/artist/643782`)
            .then(response => {
                this.setState({
                    featMedia: [
                        ...response.data
                    ],
                })
            })
            .catch(err => console.warn(err));
    }



    render(){
        return(
            <div>
                {this.state.featMedia}
            </div>
        )
    }



}

export default FeaturedMedia;