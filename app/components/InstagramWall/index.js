import styles from './index.css';

import React, { Component, PropTypes } from 'react';


export default class InstagramWall extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }


  constructor(props) {
    super(props);

    this.state = {
      images: [],
      position: 0
    }
  }


  componentWillReceiveProps(props) {
    const { images } = props;

    this.setState({ images });
  }


  next() {
    let position = this.state.position + 1 == this.state.images.length - 1 ? 0 : this.state.position + 1;

    this.setState({ position });
  }


  render() {
    return (
      <div className={styles.Wall} onClick={::this.next}>
        <div className={styles[`Slider--position${this.state.position}-animated`]}>
          {this.state.images.length == 0 ? '' : this.renderImages()}
        </div>
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
