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
    if(this.state.images.length == 0) return <ul></ul>;

    return (
      <ul>
        {this.state.images.map(image =>
          <li key={image.id}>
            <img src={image.images.thumbnail.url} />
          </li>
        )}
      </ul>
    );
  }
}
