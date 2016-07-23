import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Foo from '../src/Foo';
import  styles from '../src/style.css'

describe('<Foo/>', function () {
    it("renders a div with class", function () {
        expect(shallow(<Foo />).contains(<div className={styles.what}/>)).toBe(true);
    });

    it("hasClass check example", function () {
        expect(shallow(<Foo />).hasClass(styles.what)).toBe(true);
    });

    it("length query against shallow DOM after mounting", function () {
        expect(mount(<Foo />).find('.' + styles.what).length).toBe(1);
    });

    it("finding a child using find()", function () {
        expect(render(<Foo />).find('.' + styles.what).length).toBe(1);
    });
});
