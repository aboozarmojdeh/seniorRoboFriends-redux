import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
import CounterButton from './CounterButton';

// npm test -- --coverage --watchAll=false


test('expect to render CounterButton component', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper).toMatchSnapshot();
})


test('expect to correctly increment the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:1});
})


