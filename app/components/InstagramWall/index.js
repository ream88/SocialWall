import styles from './index.css';

import React, { Component, PropTypes } from 'react';


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
    const { images } = props;

    this.setState({ images });
  }


  render() {
    return (
      <div className={styles.Wall}>
        {this.state.images.length == 0 ? '' : this.renderImages()}
      </div>
    );
  }


  renderImages() {
    return this.state.images.map(image => this.renderImage(image));
  }


  renderImage(image) {
    const backgroundImage = `url(${image.images.standard_resolution.url})`;

    return (
      <div
        className={styles.ImageContainer}
        key={image.id}
        style={{ backgroundImage }}>
      </div>
    );
  }
}
