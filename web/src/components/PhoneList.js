import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneList extends Component {
  componentDidMount() {}

  render() {
    const { items, onItemClickHandler } = this.props;
    return (
      <div className="phone-list-container">
        {
          (!items || !items.length)
            ? (<p>No Phones</p>)
            : (
              <ul className="phone-list-container_list">
                {items.map((item, index) => (
                  <li key={(Date.now() + index).toString(16)} onClick={onItemClickHandler.bind(this, item)}>
                    <img
                      src={item.image.low}
                      title={item.title}
                      alt={item.title}
                    />
                    {item.title}
                  </li>
                ))}
              </ul>
            )
        }
      </div>
    );
  }
}

PhoneList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClickHandler: PropTypes.func,
};

PhoneList.defaultProps = {
  items: [],
};

export default PhoneList;
