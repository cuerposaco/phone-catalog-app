import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PhoneList from './PhoneList';
import { getPhones as getPhonesAction, selectPhone as selectPhoneAction } from '../store/actions/phones';

class PhoneListContainer extends Component {
  constructor() {
    super();
    this.onItemClickHandlerBind = this.onItemClickHandler.bind(this);
  }

  componentDidMount() {
    const { getPhones } = this.props;
    getPhones();
  }

  onItemClickHandler(item) {
    const { selectPhone } = this.props;
    selectPhone(item);
  }

  render() {
    const { items } = this.props;
    return (
      <PhoneList items={items} onItemClickHandler={this.onItemClickHandlerBind} />
    );
  }
}

PhoneListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  getPhones: PropTypes.func,
  selectPhone: PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getPhones: getPhonesAction,
  selectPhone: selectPhoneAction,
}, dispatch);
const mapStateToProps = state => ({
  items: state.app.items,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneListContainer);
