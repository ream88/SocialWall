import React from 'react';
import InstagramWall from '../../components/InstagramWall';
import { connect } from 'react-redux';
import * as InstagramActions from '../../actions/InstagramActions';


@connect(state => ({ images: state.images }))
export default class InstagramApp {
  render() {
    const { images } = this.props;

    return (
      <InstagramWall images={images} interval={INTERVAL} />
    );
  }
}
