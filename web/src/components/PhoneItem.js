import React from 'react';
import PropTypes from 'prop-types';

const PhoneItem = ({ phone, onClickHanlder, type }) => (
  <div className={`phone-item ${type}`} onClick={onClickHanlder}>
    <div className="phone-item__photo">
      <img
        src={phone.image[(type !== 'detail') ? 'low' : 'medium']}
        title={phone.title}
        alt={phone.title}
      />
    </div>
    <div className="phone-item__detail">
      <div className="phone-item__detail__title">
        {phone.title}
      </div>
      <div className="phone-item__detail__price">
        {phone.price}
      </div>
      { type !== 'detail'
        ? null
        : (
          <div className="phone-item__detail__extended">
            <div className="phone-item__detail__colours">
              {phone.color.map(color => <span key={`${color.toLowerCase().split(' ').join('_')}`}>{color}</span>)}
            </div>
            <div className="phone-item__detail__description">
              {phone.description}
            </div>
          </div>
        )
      }
      <div className="phone-item__detail__callToAction">
        <button type="button">{`${type !== 'detail' ? '+ info' : 'Order Now!'}`}</button>
      </div>
    </div>
  </div>
);

PhoneItem.propTypes = {
  phone: PropTypes.object,
  onClickHanlder: PropTypes.func,
  type: PropTypes.string,
};

PhoneItem.defaultProps = {
  phone: null,
  onClickHanlder: () => {},
  type: 'card',
};

export default PhoneItem;
