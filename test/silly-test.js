import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Silly from '../src/silly';
import  styles from '../src/style.css'

describe('<Silly/>', function () {
    it("fails expectation", function () {
        expect(shallow(<Silly />).contains(<div className={styles.what}/>)).toBe(true);
    });

});
