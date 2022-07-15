import axios from 'axios';
import Table from './TableData.js'
import './App.css';

const data = [
  {name:'Alpine Meadow', quant:'1'},
  {name:'Agitator Ant', quant:'1'},
  {name:'Ancestral Mask', quant:'1'},
  {name:'Archon of Absolution', quant:'1'},
  {name:'Arctic Treeline', quant:'1'},
  {name:'Briar Shield', quant:'1'},
  {name:'Canopy Vista', quant:'1'},
  {name:'Combat Calligrapher', quant:'1'},
  {name:'Court of Bounty', quant:'1'},
  {name:'Court of Grace', quant:'1'},
  {name:'Court of Ire', quant:'1'},
  {name:'Cultivate', quant:'1'},
  {name:'Curse of Bounty', quant:'1'},
  {name:'Curse of Opulence', quant:'1'},
  {name:'Darksteel Mutation', quant:'1'},
  {name:'Disrupt Decorum', quant:'1'},
  {name:'Emberwilde Captain', quant:'1'},
  {name:'Enchantress\'s Presence', quant:'1'},
  {name:'Ethereal Armor', quant:'1'},
  {name:'Field of the Dead', quant:'1'},
  {name:'Ghostly Prison', quant:'1'},
  {name:'Highland Forest', quant:'1'},
  {name:'Kitt Kanto, Mayhem Diva', quant:'1'},
  {name:'Marisi, Breaker of the Coil', quant:'1'},
  {name:'Nettlecyst', quant:'1'},
  {name:'Nissa, Who Shakes the World', quant:'1'},
  {name:'Noble Heritage', quant:'1'},
  {name:'Rugged Prairie', quant:'1'},
  {name:'Sacred Foundry', quant:'1'},
  {name:'Sanctum Weaver', quant:'1'},
  {name:'Sapseep Forest', quant:'1'},
  {name:'Sarevok\'s Tome', quant:'1'},
  {name:'Sheltered Thicket', quant:'1'},
  {name:'Shiny Impetus', quant:'1'},
  {name:'Skyline Despot', quant:'1'},
  {name:'Sol Ring', quant:'1'},
  {name:'Sphere of Safety', quant:'1'},
  {name:'Sterling Grove', quant:'1'},
  {name:'Stomping Ground', quant:'1'},
  {name:'Sythis, Harvest\'s Hand', quant:'1'},
  {name:'Tempt with Discovery', quant:'1'},
  {name:'Three Visits', quant:'1'},
  {name:'Vow of Lightning', quant:'1'},
  {name:'White Plume Adventurer', quant:'1'},
  {name:'Yavimaya, Cradle of Growth', quant:'1'}]
   
  
  function App() {
    data.forEach((element, index) => {
      axios.get("https://api.scryfall.com/cards/named?exact="+encodeURI(element.name))
      .then(response => {
        element.zip=response.data.colors
        element.typeline=response.data.type_line
        element.img=response.data.image_uris.normal
      })
  });
  return (
    <div className="App">
      <table>
      <th>Quanity</th>
      <th>Name</th>
      <th>Colours</th>
      <th>Type</th>

      {data.map((card) => (
        <Table
        key={card.key}
        name={card.name}
        quant={card.quant}
        colours={card.colours}
        typeline={card.typeline}
        img={card.img}
        />
        ))}
      </table>
    </div>
  );
}

export default App;
