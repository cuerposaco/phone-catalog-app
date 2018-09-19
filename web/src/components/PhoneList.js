import React from 'react';
import PropTypes from 'prop-types';

import PhoneItem from './PhoneItem';

const PhoneList = ({ items, onItemClickHandler }) => (
  <div className="phone-list-container">
    {
      (!items || !items.length)
        ? (<p>No Phones</p>)
        : (
          <ul className="phone-list-container_list">
            {items.map((item, index) => (
              <li key={(Date.now() + index).toString(16)}>
                <PhoneItem type="card" phone={item} onClickHanlder={() => onItemClickHandler(item)} />
              </li>
            ))}
          </ul>
        )
    }
  </div>
);

PhoneList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClickHandler: PropTypes.func,
};

PhoneList.defaultProps = {
  items: [],
  onItemClickHandler: () => {},
};

export default PhoneList;
