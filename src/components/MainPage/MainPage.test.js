import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MainPage from './MainPage';

// npm test -- --coverage --watchAll=false

let wrapper;
beforeEach(()=>{
    const mockProps={
        onRequestRobots:jest.fn(),
        robots:[],
        searchField:'',
        isPending:false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});


test('render MainPage without crashing', () => {
   
    expect(wrapper).toMatchSnapshot();
})

