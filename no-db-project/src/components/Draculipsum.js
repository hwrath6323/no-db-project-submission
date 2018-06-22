import React, {Component} from 'react';
import axios from 'axios';

class Draculipsum extends Component {
    constructor(){
        super();

        this.state = {
            vampirIpsum: ''
        }
    }


    componentDidMount(){
        axios.get(`https://litipsum.com/api/dracula/4`)
            .then(response => {
                this.setState({
                    vampirIpsum: [
                        ...response.data
                    ],
                })
            })
            .catch(err => console.warn(err));
    }



    render(){
        return(
            <div>
                {this.state.vampirIpsum}
            </div>
        )
    }



}

export default Draculipsum;