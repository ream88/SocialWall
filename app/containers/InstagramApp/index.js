import React from 'react';
import InstagramWall from '../../components/InstagramWall';
import Overlay from '../../components/Overlay';
import { connect } from 'react-redux';
import * as InstagramActions from '../../actions/InstagramActions';


@connect(state => ({ images: state.images }))
export default class InstagramApp {
  render() {
    const { images } = this.props;

    return (
      <div>
        <InstagramWall images={images} interval={INTERVAL} />
        <Overlay hashtag={HASHTAG} />
      </div>
    );
  }
}
