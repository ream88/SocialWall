import styles from './index.css';

import React, { Component, PropTypes } from 'react';


export default class Overlay extends Component {
  static propTypes = {
    hashtag: PropTypes.string.isRequired
  }


  render() {
    return (
      <div className={styles.Overlay}>
        <h1 className={styles.Hashtag}>
          #{this.props.hashtag}
        </h1>
      </div>
    );
  }
}
