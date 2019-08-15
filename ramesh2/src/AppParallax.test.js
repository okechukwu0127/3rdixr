import React from 'react';
import {shallow} from 'enzyme';
import AppParallax from './AppParallax';

describe('AppParallax', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<AppParallax label="test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});
