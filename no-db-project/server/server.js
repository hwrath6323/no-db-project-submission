const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const vampires = [
    {
        name: 'Dracula',
        // url: 'https://vampiremaman.files.wordpress.com/2012/10/75833.jpg'
        title: 'Count, Vampire King',
        nationality: 'Székely',
        home: 'Transylvania',
        creator: 'Bram Stoker',
        appearance: "Dracula",
        actor: 'Bela Lugosi, Christopher Lee, Luke Evans',
    },
    {
        name: 'Lestat de Lioncourt',
        title: 'The Brat Prince, Marquis d"Auvergne',
        nationality: 'French',
        home: 'New Orleans',
        creator: 'Anne Rice',
        appearance: 'Interview with the Vampire',
        actor: 'Tom Cruise',

    },
    {
        name: 'Abel Nightroad',
        title: 'Papal State Affairs Special Op',
        nationality: 'Crusnik',
        home: 'The Vatican',
        creator: 'Sunao Yoshida',
        appearance: 'Trinity Blood',
        actor: 'Hiroki Touchi, Troy Baker',

    },
    {
        name: 'Vamp',
        title: 'Dead Cell Op/Knife Specialist',
        nationality: 'Romanian ',
        home: 'None',
        creator: 'Hideo Kojima',
        appearance: 'Metal Gear Solid 2: Sons of Liberty',
        actor: 'Ryoutarou Okiayu, Phil LaMarr',

    },
    {
        name: 'Adrian "Alucard" Fahrenheit Ţepeş',
        title: 'The Tragic Prince',
        nationality: 'Romanian',
        home: 'Transylvania',
        creator: 'Ayami Kojima',
        appearance: 'Castlevania III: Draculas Curse',
        actor: 'Ryoutarou Okiayu, Yuri Lowenthal',

    },
]

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../build'));






app.get('/vampires', (req, res) => {
                                // express GET point (4, req)
    console.log('it is here')
    console.log(req.query.search)
    if(req.query.search !== undefined){
        const vampireList = vampires.filter(vampire => {
            const search = req.query.search.toLowerCase()
            return vampire.name.includes(search) ||
                vampire.title.toLowerCase().includes(search) ||
                vampire.nationality.toLowerCase().includes(search) ||
                vampire.home.toLowerCase().includes(search) ||
                vampire.creator.toLowerCase().includes(search) ||
                vampire.appearance.toLowerCase().includes(search) ||
                vampire.actor.toLowerCase().includes(search);
        })
        res.send(vampireList);
    } else {
        res.send(vampires);
    }
});

app.post('/vampires', (req, res) => {
                                // req.body endpoint? (4, req)
    const newVampire = req.body;

    vampires.push(newVampire);
    res.send(newVampire);
});

app.patch('/vampires/:id', (req, res) => { // or PUT
    const { id } = req.params;
    const vampire = req.body;
    
    vampires[id] = vampire;
    
    res.send(vampires);
});

app.delete('/vampires/:id', (req, res) => {
    const { id } = req.params;
    
    const removedVampire = vampires.splice(id, 1);

    res.send(vampires);

});
                            // full CRUD? (4)


const port = process.env.SERVER_PORT || 3005; 

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});