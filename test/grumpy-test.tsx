import * as React from 'react';
import {shallow, mount, render} from 'enzyme';
import Grumpy from '../src/grumpy';
import  styles from '../src/style.css'

describe('<Grumpy/>', function () {
    it("fulfills expectation", function () {
        expect(shallow(<Grumpy />).hasClass(styles.what)).toBe(true);
    });

});
