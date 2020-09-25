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
    wrapper.find('.counter-button').simulate('click');
    wrapper.find('#counter').simulate('click');
    expect(wrapper.state()).toEqual({count:2});
    wrapper.find('#counter').simulate('keypress');
    expect(wrapper.state()).toEqual({count:2});
    expect(wrapper.props().color).toEqual('red');
})


