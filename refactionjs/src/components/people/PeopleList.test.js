import React from 'react';
import {shallow} from 'enzyme';
import PeopleList from './PeopleList';

describe("People List", () => {
  let mockList;

  beforeEach(() => {
    mockList = [
      {name: "tim", age: 33, gender: "male"},
      {name: "alex", age: 30, gender: "female"}
    ];
  });

  it('should have 2 items', () => {
    const list = shallow(<PeopleList people={mockList} />)
    expect(list.find("tr").length).toEqual(3);
  });
});