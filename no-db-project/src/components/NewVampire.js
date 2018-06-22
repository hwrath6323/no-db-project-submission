import React, { Component } from 'react';

//import Button from './components/Button.js';



class NewVampire extends Component {
    
    inputs = [
        {
          label: 'Name',
          property: 'name',
        },
        {
          label: 'Title',
          property: 'title',
        },
        {
            label: 'Nationality',
            property: 'nationality',
        },
        {
            label: 'Home',
            property: 'home',
        },
        {
            label: 'Creator',
            property: 'creator',
        },
        {
            label: 'First Appearance',
            property: 'appearance',
        },
        {
            label: 'Actor',
            property: 'actor',
        },
    ];

    constructor(props){
        super(props);

        const vampire = props.vampire || {};

        this.state = {
            name: (props.vampire && props.vampire.name) || '',
            title: (props.vampire && props.vampire.title) || '',
            nationality: (props.vampire && props.vampire.nationality) || '',
            home: (props.vampire && props.vampire.home) || '',
            creator: (props.vampire && props.vampire.creator) || '',
            appearance: (props.vampire && props.vampire.appearance) || '',
            actor: (props.vampire && props.vampire.actor) || '',
        };
    }


    componentWillReceiveProps(props) {
        const vampire = props.vampire || {};
        
        this.setState({
            name: vampire.name,
            title: vampire.title,
            nationality: vampire.nationality,
            home: vampire.home,
            creator: vampire.creator,
            appearance: vampire.appearance,
            actor: vampire.actor,
        });
    }


    render(){
        const inputs = this.inputs
          .map((input, i) => (
            <div  key={`new-vampire-form-${i}`}>
                <label>
                  {input.label}:
                  <input 
                    type='text' 
                    value={this.state[input.property]}
                    onChange={e => this.handleChange(e,input.property)} 
                    name={input.property} />
                </label>
            </div>
          ));

        return(
            <form name='add-vampire-form'>
            {inputs}

            <button 
                className='raised' 
                type='submit' 
                onClick={e => this.handleSubmit(e)}
            >
                Add Vampire
            </button>

            <button
                  className="raised"
                  onClick={e => {e.preventDefault() ; this.props.onCancel && this.props.onCancel(e)}}
            >
                Cancel
            </button>
          </form>
        );

    }



    handleChange(event, name) {
        const value = event.target.value;
        this.setState({ [name] : value });
    }
    
    
    handleSubmit(e){
        e.preventDefault(); 

        const { name, title, nationality, home, creator, appearance, actor } = this.state;    
        
        const newVampire = {name, title, nationality, home, creator, appearance, actor};

        if (this.props.onSubmit){
            this.props.onSubmit(e, newVampire)
        }
    }


}

export default NewVampire;