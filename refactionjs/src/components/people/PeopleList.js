import React from 'react';
import PropTypes from 'prop-types';

const PeopleList = ({people}) => {
  return(
    <table className="table mt-3">
      <thead className="thead-light">
        <tr><th>Name</th><th>Age</th></tr>
      </thead>

      <tbody>
      {people != undefined && people.length > 0 ?
        people.map((x, i) => {
          return (<tr key={i}><td>{x.name}</td> <td>{x.age}</td></tr>)
        }) : <tr><td colSpan="2">No People found</td></tr>
      }
      </tbody>
    </table>
  )
}


PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}
export default PeopleList;