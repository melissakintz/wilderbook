import './App.scss';
import { useEffect, useState } from "react";
import Card from './components/Card';
import Navbar from './components/Navbar';
import axios from "axios";
import AddWilder from './components/AddWilder';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [wilders, setWilders ] = useState([]);
  useEffect(() => {
      async function fetchData(){
          try {
              const result = await axios(
                "http://localhost:5000/api/wilder/read"
                );
              setWilders(result.data.result);
          } catch(err) {
              console.log(err);
          }
      };
      fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <button onClick={() => setDisplayForm(!displayForm)}><ion-icon name={ displayForm ? "remove-circle-outline" : "add-circle-outline"} size="large"/></button>
      {displayForm && <AddWilder/> }

      <div className="card-wrapper">
        {wilders.map((wilder) => <Card wilder={wilder} key={wilder.id}/>)}
      </div>
      
    </div>
  );
}

export default App;
