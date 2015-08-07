import styles from './index.css';

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';


export default class InstagramWall extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }


  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }


  componentWillReceiveProps(props) {
    let { images } = props;

    images = _.sortByOrder(images, 'created_time', 'desc');
    images = _.take(images, 5);

    this.setState({ images });
  }


  render() {
    if(this.state.images.length == 0) return <div className={styles.Wall}></div>;

    return (
      <div className={styles.Wall}>
        {this.state.images.map(image => {
          const backgroundImage = `url(${image.images.standard_resolution.url})`;

          return (
            <div className={styles.ImageContainer} key={image.id} style={{ backgroundImage }}>
            </div>
          );
        })}
      </div>
    );
  }
}
