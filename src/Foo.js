import React, { PropTypes } from 'react';
import styles from './style.css'
const propTypes = {};

const defaultProps = {};

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }
  untestedMethod(){
    this.fail()
  }
  render() {
    return (
      <div className={styles.what} />
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
