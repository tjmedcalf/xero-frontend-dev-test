import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleList from "../components/people/PeopleList";

function App() {
  let [list] = useState(0);

  const getPeople = async function () {
    try {
      const response = await axios.get('http://localhost:3000/api/everyone');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    list = getPeople().data;
  });
    
  return (
    <div className="container-fluid">
      <header>
        <h1>People</h1>
      </header>

      <input type="checkbox"/> Everyone
      
      <input type="checkbox"/> Male
      <input type="checkbox"/> Female

      <input type="checkbox"/> Over 30
      <input type="checkbox"/> Under 30

      <PeopleList people={list}/>
    </div>
  );
}

export default hot(module)(App);