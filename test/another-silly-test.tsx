import * as React from 'react';
import {shallow, mount, render} from 'enzyme';
import Silly from '../src/silly.js';
const styles = require('../src/style.css');

describe('another <Silly/> in a .tsx file', function () {
    it("fails expectation", function () {
        expect(shallow(<Silly />).contains(<div className={styles.what}/>)).toBe(true);
    });

});
