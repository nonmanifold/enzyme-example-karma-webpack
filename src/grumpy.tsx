import * as React from 'react';
const styles = require('./style.css');

interface  Props {

}
interface  State {

}

export default  class Grumpy extends React.Component<Props, State> {
    constructor(props:Props) {
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