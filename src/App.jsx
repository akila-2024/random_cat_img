import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



// https://api.thedogapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search


// - get // getting some data
// - put / patch 
// post 
// delete



// -------------------------------axios-------------------------------
function App() {
  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchCatImage = () => {
    setLoading(true);

    axios.get("https://api.thecatapi.com/v1/images/search").then(response =>{console.log(response.data); setImage(response.data[0].url); setLoading(false)})
    .catch(error => {
      console.error("Error fetching the cat image: ", error);
      setLoading(false);
    })
  }


  

  // console.log(image);

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className="App">
      <h1>Random Cat Image</h1>
      <hr />
      {loading ? <p>Loading...</p>:

      <img src={image} alt="Random Cat Image" style={{width:'300px', height: 'auto'}} />
      }
      <br />

      <button onClick={fetchCatImage}>Get New Random Image</button>
    </div>
  );
}

export default App;




// -----------------------fetch()--------------------------------
// function App() {
//   const [image, setImage] = useState(null); 
//   const [loading, setLoading] = useState(true);

//   const fetchCatImage = () => {
//     setLoading(true);

//     fetch("https://api.thecatapi.com/v1/images/search").then(response => response.json()).then(data =>{ console.log(data); setImage(data[0].url); setLoading(false);})
//     .catch(error => {
//       console.error("Error fetching the cat image: ", error);
//       setLoading(false);
//     })
//   }


  

//   // console.log(image);

//   useEffect(() => {
//     fetchCatImage();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Random Cat Image</h1>
//       <hr />
//       {loading ? <p>Loading...</p>:

//       <img src={image} alt="Random Cat Image" style={{width:'300px', height: 'auto'}} />
//       }
//       <br />

//       <button onClick={fetchCatImage}>Get New Random Image</button>
//     </div>
//   );
// }

// export default App;