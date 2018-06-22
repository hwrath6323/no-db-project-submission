import React, {Component} from 'react';
import './VampireList.css'
import Dracula from './images/bela dracula.jpg';
import Lestat from './images/tom-cruise-lestat.jpg';
import Abel from './images/trinbl-abel.jpg';
import Alucard from './images/Alucard.png';
import Vamp from './images/msg-vamp.png';


class VampireList extends Component {
    // constructor(props){
    //     super(props)
        
        // this.state = {
        //     vampires: [
        //         {
        //             img: <img src={Dracula} />,
        //             name: 'Dracula',
        //             title: 'Count, Vampire King',
        //             nationality: 'Székely',
        //             home: 'Transylvania',
        //             creator: 'Bram Stoker',
        //             appearance: "Dracula",
        //             actor: 'Bela Lugosi, Christopher Lee, Luke Evans',
        //             // url: './images/bela dracula.jpg'
        //         },
        //         {
        //             img: <img src={Lestat} />,
        //             name: 'Lestat de Lioncourt',
        //             title: 'The Brat Prince, Marquis d"Auvergne',
        //             nationality: 'French',
        //             home: 'New Orleans',
        //             creator: 'Anne Rice',
        //             appearance: 'Interview with the Vampire',
        //             actor: 'Tom Cruise',

        //         },
        //         {
        //             img: <img src={Abel} />,
        //             name: 'Abel Nightroad',
        //             title: 'Papal State Affairs Special Op',
        //             nationality: 'Crusnik',
        //             home: 'The Vatican',
        //             creator: 'Sunao Yoshida',
        //             appearance: 'Trinity Blood',
        //             actor: 'Hiroki Touchi, Troy Baker',

        //         },
        //         {
        //             img: <img src={Vamp} />,
        //             name: 'Vamp',
        //             title: 'Dead Cell Op/Knife Specialist',
        //             nationality: 'Romanian ',
        //             home: 'None',
        //             creator: 'Hideo Kojima',
        //             appearance: 'Metal Gear Solid 2: Sons of Liberty',
        //             actor: 'Ryoutarou Okiayu, Phil LaMarr',

        //         },
        //         {
        //             img: <img src={Alucard} />,
        //             name: 'Adrian "Alucard" Fahrenheit Ţepeş',
        //             title: 'The Tragic Prince',
        //             nationality: 'Romanian',
        //             home: 'Transylvania',
        //             creator: 'Ayami Kojima',
        //             appearance: 'Castlevania III: Draculas Curse',
        //             actor: 'Ryoutarou Okiayu, Yuri Lowenthal',

        //         },
        //     ],
        //     filterValue: this.props.filterValue
        // }
    // }
  

    render(){
        return(
            <div>
                {this.props.vampires.map((v, i) => {
                        return (
                            <li className="individual" key={`i-${i}`}>
                                <h3>{v.name}</h3>
                                    {/* <br />{v.img} */}
                                    <br />{v.title}
                                    <br />{v.nationality}
                                    <br />{v.home}
                                    <br />{v.creator}
                                    <br />{v.appearance}
                                    <br />{v.actor}
                                    <br /><button>Edit</button>
                                    <br /><button onClick={() => this.props.deleteVampire(i)}>Delete</button>
                            </li>
                        )}
                    )
                }
            </div>
        )
    }



}

export default VampireList;


// .filter((v, i) => {
//     // console.log(v)
//     return (
//         v.name.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

//         v.title.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

//         v.nationality.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

//         v.home.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
        
//         v.creator.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
        
//         v.appearance.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
        
//         v.actor.toLowerCase().includes(this.props.filterValue.toLowerCase()) 
        