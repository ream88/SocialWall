import React from 'react';
import InstagramWall from '../../components/InstagramWall';
import { connect } from 'react-redux';
import * as InstagramActions from '../../actions/InstagramActions';


@connect(state => ({ instagram: state.instagram }))
export default class InstagramApp {
  render() {
    const { instagram } = this.props;

    return (
      <InstagramWall images={instagram} />
    );
  }
}
