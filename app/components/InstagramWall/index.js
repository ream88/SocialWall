import styles from './index.css';

import React, { Component, PropTypes } from 'react';


export default class InstagramWall extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    interval: PropTypes.number.isRequired
  }


  constructor(props) {
    super(props);

    this.state = {
      images: [],
      sliding: false
    }
  }


  componentDidMount() {
    this.interval = setInterval(() => this.next(), this.props.interval * 1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }


  componentWillReceiveProps(props) {
    const images = [
      ...this.state.images,
      ...props.images.filter(newImage => !this.state.images.some(image => image.id === newImage.id))
    ];

    this.setState({ images });
  }


  next() {
    this.setState({ sliding: true });

    setTimeout(() => {
      requestAnimationFrame(() => {
        const images = this.state.images;
        const movingImage = images.shift();

        if(images.length <= 5) images.push(movingImage);

        this.setState({ images, sliding: false });
      })
    }, 500);
  }


  render() {
    return (
      <div className={styles.Wall}>
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
