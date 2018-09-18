import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PhoneList from './PhoneList';
import { getPhones, selectPhone } from '../store/actions/phones';

class PhoneListContainer extends Component {
  componentDidMount() {
    this.props.getPhones();
  }

  onItemClickHandler(item) {
    console.log('onItemClickHandler', item);
    this.props.selectPhone(item);
  }

  render() {
    const { items } = this.props;
    return (
      <PhoneList items={items} onItemClickHandler={this.onItemClickHandler.bind(this)} />
    );
  }
}

PhoneListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  getPhones: PropTypes.func,
  selectPhone: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({ getPhones, selectPhone }, dispatch);
const mapStateToProps = state => ({
  items: state.app.items,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneListContainer);
