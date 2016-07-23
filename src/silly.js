import React, { PropTypes } from 'react';
import styles from './style.css'

export default  class Silly extends React.Component {
    constructor(props) {
        super(props);
    }
    untestedMethod(){
        this.iHaveNoSuchMethod()
        this.andThus()
        this.I()
        this.fail()
    }
    render() {
        return (
            <span className={styles.doesNotExist} />
        );
    }
}