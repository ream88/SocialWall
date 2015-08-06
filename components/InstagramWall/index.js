import React, { Component, PropTypes } from 'react';
import 'babel/polyfill';
import 'whatwg-fetch';


export default class InstagramWall extends Component {
  static propTypes = {
    clientId: PropTypes.string.isRequired
  }


  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }


  componentDidMount() {
    fetch(`https://api.instagram.com/v1/media/popular?client_id=${this.props.clientId}`)
      .then(response => response.json())
      .then(json => this.setState({ images: json.data }));
  }


  render() {
    if(this.state.images.length == 0) return <ul></ul>;

    return (
      <ul>
        {this.state.images.map(image =>
          <li>
            <img key={image.id} src={image.images.thumbnail.url} />
          </li>
        )}
      </ul>
    );
  }
}
