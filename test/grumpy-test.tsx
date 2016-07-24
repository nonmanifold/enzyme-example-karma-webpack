import * as React from 'react';
import {shallow, mount, render} from 'enzyme';
import Grumpy from '../src/grumpy';
const styles = require('../src/style.css');

describe('<Grumpy/>', function () {
    it("fulfills expectation", function () {
        expect(shallow(<Grumpy />).hasClass(styles.what)).toBe(true);
    });

});
