import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HeaderComponent from './HeaderComponent';
import SpinnerComponent from './SpinnerComponent';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';

import { resetSelectPhone as resetSelectPhoneAction } from '../store/actions/phones';

function Main({ loading, selectedItem, resetSelectPhone }) {
  return (
    <div>
      <HeaderComponent />
      { loading && <SpinnerComponent /> }
      <PhoneListContainer />
      { selectedItem
        && <PhoneDetailComponent phone={selectedItem} onCloseHandler={resetSelectPhone} />}
    </div>
  );
}

Main.propTypes = {
  loading: PropTypes.bool,
  selectedItem: PropTypes.object,
  resetSelectPhone: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: state.app.loading,
  selectedItem: state.app.selectedItem,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  resetSelectPhone: resetSelectPhoneAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
