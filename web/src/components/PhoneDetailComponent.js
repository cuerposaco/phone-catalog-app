import React from 'react';
import PropTypes from 'prop-types';

import PhoneItem from './PhoneItem';

function PhoneDetailComponent({ phone, onCloseHandler }) {
  return (
    <div className="phone-detail-container">
      <div className="phone-detail-container__content">
        <button type="button" className="phone-detail-container__closeBtn" onClick={onCloseHandler}>[X] close</button>
        <PhoneItem type="detail" phone={phone} />
      </div>
      <div className="phone-detail-container__lightbox" onClick={onCloseHandler} />
    </div>
  );
}

PhoneDetailComponent.propTypes = {
  phone: PropTypes.object,
  onCloseHandler: PropTypes.func,
};

export default PhoneDetailComponent;
