import * as React from 'react';
import styles from './style.css'
interface  Props {

}
interface  State {

}

export default  class Grumpy extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    untestedMethod() {
        this.iHaveNoSuchMethod()
        this.andThus()
        this.I()
        this.fail()
    }

    render() {
        return (
            <span className={styles.what}/>
        );
    }
}