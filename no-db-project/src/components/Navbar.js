import React, {Component} from 'react';
// import Button from './components/Button.js';
//import './Navbar.css'


class Navbar extends Component{

    constructor(){
        super();
    
        this.state = {
          vampire: null,
          vampireIndex: -1,
          makeNewVampire: false,
          vampires: [],
          inputValue: '',
        };
    }


    render(){
        return (
            <div className="container">
                <div className="child">History</div>
                <div className="child">In Media</div>
                <div className="child">Famous</div>
                <div className="child">
                  <form onSubmit={e => this.filterCharacters(e)}>
                    <input 
                      type='text'
                      placeholder='Name, nationality, etc.'
                      value={this.state.inputValue} 
                      className='search-bar'
                      onChange={(e) => this.handleChange(e, 'inputValue')}
                      // onChange={(e) => handleChange(e, 'inputValue')}
                      // onChange={handleChange}
                     //
                        ref="query"
                    />
                    <button 
                        type='submit'
                        className='raised'
                    >
                        Search
                    </button>
                  </form>
                </div>
            </div>
        )
    }



}

export default Navbar;