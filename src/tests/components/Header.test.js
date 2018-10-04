import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import { wrap } from 'module';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text()).toEqual('Expensify');
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('', () => {

});

test('', () => {

});

