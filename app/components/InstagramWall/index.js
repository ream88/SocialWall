import styles from "./index.css";

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import ReactTransitionEvents from "react/lib/ReactTransitionEvents";


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
    const node = ReactDOM.findDOMNode(this.refs.slider);
    const endListener = (e) => {
      if(e && e.target !== node) return;

      ReactTransitionEvents.removeEndEventListener(node, endListener);

      const images = this.state.images;
      const movingImage = images.shift();

      if(images.length <= 5) images.push(movingImage);

      this.setState({ images, sliding: false });
    };

    ReactTransitionEvents.addEndEventListener(node, endListener);

    this.setState({ sliding: true });
  }


  render() {
    return (
      <div className={styles.Wall}>
        <div className={this.state.sliding ? styles.SliderAnimated : styles.Slider} ref="slider">
          {this.state.images.length == 0 ? "" : this.renderImages()}
        </div>
      </div>
    );
  }


  renderImages() {
    return this.state.images.map((image, index) => this.renderImage(image, index));
  }


  renderImage(image, index) {
    const backgroundImage = `url(${image.images.standard_resolution.url})`;

    return (
      <div
        className={index > 2 ? styles.ImageContainerNotVisible : styles.ImageContainer}
        key={image.id}
        style={{ backgroundImage }}>
      </div>
    );
  }
}
