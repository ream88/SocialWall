import styles from './index.css';

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    return (
      <ReactCSSTransitionGroup component="div" className={styles.Wall} transitionName="example" transitionAppear={true}>
        {this.state.images.length == 0 ? '' : this.renderImages()}
      </ReactCSSTransitionGroup>
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
