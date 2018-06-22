import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header.js';

// import Navbar from './components/Navbar.js';

import Footer from './components/Footer.js';
                        // ****stateless function component (4, req)****

import Button from './components/Button.js';
                        // ****extra Component (2)****

import VampireList from './components/VampireList.js';
                        // ****stateful component (4, req)****

import Draculipsum from './components/Draculipsum.js';
                        // ****extra component (2)****
                        // ****external api (2)****

import NewVampire from './components/NewVampire.js';

import FeaturedMedia from './components/FeaturedMedia';
                        // ****external api (2)****


class App extends Component {
  
  state = {
    vampire: null,
    vampireIndex: -1,
    makeNewVampire: false,
    vampires: [],
    inputValue: '',
  };

  componentDidMount(){
    axios.get('http://localhost:3005/vampires')
      .then(response => {
        console.log(response);
        this.setState({
          vampires: response.data
        })
      })
      .catch(err => console.warn(err));
  }


  // handleChange(e, name){
  //   this.setState({
  //     [name]:e.target.value
  //   })
  // }

    // updateVampire=(id)=>{
  //   return axios.patch('/vampires' + this.state.vampireIndex, vampire)
  //   .then((response) => {
  //     const vampires = this.state.vampires.slice();
      
  //     vampires[this.state.vampireIndex] = response.data;
      
  //     this.setState({
  //       vampire: null,
  //       vampireIndex: -1,
  //       vampires,
  //     });
  //   })
  // }

  deleteVampire=(id)=>{
    axios.delete('/vampires/' + id)
    .then((response) => {
      this.setState({vampires: response.data})
    })
  }


    
  render(){  

    // const vampireList = this.state.vampires
    //   .map(
    //     (v,i) => (
    //       <VampireList 
    //         name={v.name}
    //         title={v.title}
    //         nationality={v.nationality}
    //         home={v.home}
    //         creator={v.creator}
    //         appearance={v.appearance}
    //         actor={v.actor}
    //         key={`i-${i}`}
    //         clickItem={() => this.editVampire(v,i)}
    //         removeItem={e => {e.stopPropagation();
    //           this.deleteVampire(i)}}
    //         filterValue={this.refs.query.value}
    //       />
    //   ));

    const newVampireForm = (this.state.makeNewVampire) &&
      <NewVampire
          title={this.state.vampire ? '' : ''}
          character={this.state.vampire || {}}
          onSubmit={
            this.state.vampire ?
              (e, update) => this.updateVampire(e, update) :
              (e, nc) => this.handleSubmit(e, nc)
          }
          onCancel={
            () => this.state.vampire ? 
              this.cancelUpdateVampire() :
              this.hideNewVampireForm()
          } />;


    return (
      <div className="App">

        
        <Header />
          
        {/* <Navbar /> */}

        <div className="navbar">
          <div className="child">History</div>
          <div className="child">In Media</div>
          <div className="child">Famous</div>
          <div className="child">
            <form onSubmit={e => this.filterVampires(e)}
            >
              <input 
                placeholder='Name, nationality, etc.'
                //value={this.state.inputValue} 
                ref='query'
                name='search'
                // onChange={(e) => this.handleChange(e, 'inputValue')}
              />
              <Button type='submit'>Search</Button>
            </form>
          </div>

        </div>


        <div className="content-body">
          <div className='featured'>

            <h2>Featured Vampires</h2>
            
            <div className='vampList'>
              <VampireList 
                vampires={this.state.vampires} 
                deleteVampire={this.deleteVampire} 
                //editThisVampire={this.editThisVampire}
              />
            </div>

            <br />


            <div>
              {
                (!this.state.makeNewVampire && !this.state.vampire) && 

                <Button
                  className='add-vamp' 
                  onClick={() => this.showNewVampireForm()}
                >
                  Add A Vampire
                </Button>
                                  //****reused component (2)**** 
              }
            </div>

            {newVampireForm}
            {
              (!this.state.vampire || this.state.makeNewVampire) &&
              <ul className='vampire-list'>
                {/* {vampireList} */}
              </ul>
            }
              {/* <NewVampire
              vampire={this.state.vampire || {}}
              onSubmit={
                this.state.vampire ?
                (e, update) => this.updateCVampire(e, update) :
                (e, nc) => this.handleSubmit(e, nc)
              } /> */}


          </div>
        </div>

        <div className='content-body'>
          <div className='draculaIpsum'>
            <h2>Featured Passage</h2>
            <h3>"Dracula" by Bram Stoker</h3>
            <Draculipsum />
          </div>
        </div>
                            {/* ****external web api**** (2) */}

        <div className='content-body'>
          <div className='featured-media'>
          <h2>Featured Album</h2>
            <FeaturedMedia id='611744'/>
          </div>
        </div>
                            {/* ****external web api**** (2) */}
      
                            <div className='content-body'>
          <div className='featured-media'>
          <h2>Featured Single</h2>
            <FeaturedMedia id='3924106'/>
          </div>
        </div>
                            {/* ****external web api**** (2) */}

        <div className="footer-container">
          <Footer />
        </div>

      </div>
    )
  }

  handleSubmit(e, newVampire) {
    e.preventDefault();
    
    return axios.post('/vampires', newVampire)
      .then(response => {
        const vampires = [
          ...this.state.vampires,
          response.data,
        ];
        
        this.setState({
          vampires,
          makeNewVampire: false,
        });
      })
      .catch(err => {
        console.warn('vampire couldn\'t be added');
        console.info(err);
        throw err;
      });
  }
  
  showNewVampireForm() {
    this.setState({
      makeNewVampire: true,
    });
  }
  
  hideNewVampireForm() {
    this.setState({
      makeNewVampire: false,
    });
  }
  
  // editVampire(vampire, index) {
  //   this.setState({
  //     vampire,
  //     vampireIndex: index,
  //   });
  // }
  
  cancelUpdateVampire() {
    this.setState({
      vampire: null,
      vampireIndex: -1,
    });
  }
  
  
  // deleteVampire(index) {
    //   axios.delete('/vampires/' + index)
    //     .then(() => {
      //       this.setState({
        //         vampires: this.state.vampires.filter((c, i) => i !== index),
        //       });
        //     });
        // }
        



  filterVampires(e) {
    e.preventDefault();
    
    axios.get(`/vampires?search=${this.refs.query.value}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        vampires: response.data,
      });
    })
    .catch(err => {
      console.info(err);
    });
  }
        
        
        

  editThisVampire = (vampireIndex, vampire) => {
    return axios.patch('/vampires/' + vampireIndex, vampire)
      .then(response => {
        this.setState({
          vampire: response.data
        });
      })
  }
        
        

}


      

export default App;



//Header ***extra component 2***
      //navbar ***(URL parameter x2 2)***
      //search ***(Query string parameter 1-2)***

    //body
        //vampire list ***(stateful component 4)***
        //create vampire ***(GET data 4)***CRUD 4***
        //***(external api 2-4)***
      //featured???

      //REQ.BODY 4

    //footer ***(stateless function 4)***

