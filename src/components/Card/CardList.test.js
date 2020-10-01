import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
import CardList from './CardList';

// npm test -- --coverage --watchAll=false



const mockRobots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      link:'https://www.google.com'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      link:'https://www.google.com'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      link:'https://www.google.com'
    }
  ];

  const wrapper = shallow(<CardList robots={mockRobots} />); 
  
test('expect to render CardList component',()=>{
    expect(wrapper).toMatchSnapshot();
})


