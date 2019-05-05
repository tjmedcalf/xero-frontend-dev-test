import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RadioInput from "../components/common/RadioInput";
import PeopleList from "../components/people/PeopleList";

const App = () => {
  // init hooks!
  let [list, loadData] = useState([]);
  let [filterBy, updateFilter] = useState(["everyone"]);

  //helper method for xhr call
  const getPeople = async function () {
    let promises = filterBy.map((filter)=> {
      return axios.get(`http://localhost:3000/api/${filter}`);
    });
    
    try {
      let response = await axios.all(promises);
      
      //Flatten nested results & multi-dimensional array and filter out dupes
      let flat = [...response.map(x=>x.data)].reduce(function(prev, curr) {
        return prev.concat(curr);
      }, []).filter((thing, index, self) => {
        return index === self.findIndex((t) => (
          t.name === thing.name && t.age === thing.age
        ))
      });

      loadData( flat );
    } catch (error) {
      console.log("ajax fail:", error);
    }
  }
  
  const handleRadio = evt => {
    // Pass the value to state
    if( filterBy.find( x => x == evt.target.value) ) {
      //Slice when box toggled 
      updateFilter( filterBy.filter((x => x!=evt.target.value)) ); 
    } else {
      //Append to array when new box ticked
      updateFilter([...filterBy, evt.target.value]); 
    }
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
        name={"filterBi"}
        value={"everyone"}
        checked={ filterBy.some(x => x == "everyone") } 
        handler={handleRadio} />
      
      <RadioInput 
        id={"field2"}
        label={"Male"}
        name={"filterBi"}
        value={"male"}
        checked={ filterBy.some(x => x == "male") } 
        handler={handleRadio} />
      
      <RadioInput 
        id={"field3"}
        label={"Female"}
        name={"filterBi"}
        value={"female"}
        checked={ filterBy.some(x => x == "female") } 
        handler={handleRadio} /> 

      <RadioInput 
        id={"field4"}
        label={"Over 30"}
        name={"filterBi"}
        value={"over30"}
        checked={filterBy.some(x => x == "over30")} 
        handler={handleRadio} /> 

      <RadioInput 
        id={"field5"}
        label={"Under 30"}
        name={"filterBi"}
        value={"under30"}
        checked={filterBy.some(x => x == "under30")} 
        handler={handleRadio} />
      
      <PeopleList people={list}/>
    </div>
  );
}

export default hot(module)(App);