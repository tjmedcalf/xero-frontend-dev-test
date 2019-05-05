import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RadioInput from "../components/common/RadioInput";
import PeopleList from "../components/people/PeopleList";

function App() {
  let [list, loadData] = useState([]);
  let [filterBy, updateFilter] = useState("everyone");

  const getPeople = async function () {
    try {
      const response = await axios.get(`http://localhost:3000/api/${filterBy}`);
      loadData(response.data);
    } catch (error) {
      console.log("ajax fail:", error);
    }
  }
  
  const handleRadio = evt => {
    // Pass the value to state
    updateFilter(evt.target.value);
  }

  useEffect(() => {
    getPeople();
  }, [filterBy]);
    
  return (
    <div className="container-fluid">
      <header>
        <h1>People</h1>
      </header>

      <RadioInput 
        id={"field1"}
        label={"Everyone"}
        name={"filterBy"}
        value={"everyone"}
        checked={ filterBy === "everyone" } 
        handler={handleRadio} />
      
      <RadioInput 
        id={"field2"}
        label={"Male"}
        name={"filterBy" }
        value={"male"}
        checked={ filterBy === "male" } 
        handler={handleRadio} />
      
      <RadioInput 
        id={"field3"}
        label={"Female"}
        name={"filterBy"}
        value={"female"}
        checked={ filterBy === "female" } 
        handler={handleRadio} /> 

      <RadioInput 
        id={"field4"}
        label={"Over 30"}
        name={"filterBy"}
        value={"over30"}
        checked={filterBy === "over30"} 
        handler={handleRadio} /> 

      <RadioInput 
        id={"field5"}
        label={"Under 30"}
        name={"filterBy"}
        value={"under30"}
        checked={filterBy === "under30"} 
        handler={handleRadio} />
      
      <PeopleList people={list}/>
    </div>
  );
}

export default hot(module)(App);