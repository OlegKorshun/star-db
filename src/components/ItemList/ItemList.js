import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map((item) => {
    const label = renderLabel(item);
    return (
      <li className='list-group-item'
        key={item.id}
        onClick={() => onItemSelected(item.id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className='itemList list-group'>
      {items}
    </ul>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func
};

export default ItemList;