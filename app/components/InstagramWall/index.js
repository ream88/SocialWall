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
      sliding: false
    }
  }


  componentWillReceiveProps(props) {
    const { images } = props;

    this.setState({ images });
  }


  next() {
    this.setState({ sliding: true });

    setTimeout(() => {
      requestAnimationFrame(() => {
        let images = this.state.images;
        images.push(images.shift());

        this.setState({ images, sliding: false });
      })
    }, 500);
  }


  render() {
    return (
      <div className={styles.Wall} onClick={::this.next}>
        <div className={styles[this.state.sliding ? 'Slider--animated' : 'Slider--not-animated']}>
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
