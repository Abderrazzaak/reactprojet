
import './App.css';
import React from "react";
import data from './data.json'
import Card from './component/Card';
function App() {

  return (
    
  <div>
 <Card dataprops={data}/>
 
  </div>)
}

export default App;
