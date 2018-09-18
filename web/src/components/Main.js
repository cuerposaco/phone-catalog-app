import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';

function Main({ loading, selectedItem }) {
  return (
    <div>
      <h1>Phone Catalog React</h1>
      { loading && <p>Loading....</p>}
      <PhoneListContainer />
      { selectedItem && <PhoneDetailComponent phone={selectedItem} />}
    </div>
  );
}

Main.propTypes = {
  loading: PropTypes.bool,
  selectedItem: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.app.loading,
  selectedItem: state.app.selectedItem,
});

export default connect(
  mapStateToProps,
)(Main);
