import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
import Card from './Card';

// npm test -- --coverage --watchAll=false



test('expect to render Card component',()=>{
    const wrapper = shallow(<Card />); 
    expect(wrapper).toMatchSnapshot();
})

// it('expect to render Card Component', () => {
//     const tree = renderer.create(<Card />).toJSON();
//     console.log(tree)
//     expect(tree).toMatchSnapshot();
//   });
