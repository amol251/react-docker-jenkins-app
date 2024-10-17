import React from 'react';
import Counter from '../Counter';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('<Counter />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Counter />);
    });

    it('should initialize the count to 0', () => {
        expect(wrapper.find('h1').text()).toEqual('Count: 0');
    });

    it('should increment the count by 1 when Increment button is clicked', () => {
        wrapper.find('#increment').simulate('click');
        expect(wrapper.find('h1').text()).toEqual('Count: 1');
    });

    it('should decrement the count by 1 when Decrement button is clicked', () => {
        // Increment first to set count to 1
        wrapper.find('#increment').simulate('click');
        // Now decrement
        wrapper.find('#decrement').simulate('click');
        expect(wrapper.find('h1').text()).toEqual('Count: 0');
    });

    it('should not go below 0', () => {
        // Decrement without incrementing
        wrapper.find('#decrement').simulate('click');
        expect(wrapper.find('h1').text()).toEqual('Count: 0');
    });
});
