import { hot } from 'react-hot-loader';
import React from 'react';

const PeopleList = ({people}) => {
  return(
    <ul>
      {people != undefined && people.length > 0 ?
        people.map((x, i) => {
          return (<li key={i}>Name:{x.name}, Age: {x.age}</li>)
        }) : 
        <li>No People found</li>
      }
    </ul>
  )
}

export default PeopleList;