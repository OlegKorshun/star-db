import React, { Component } from 'react';

import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';

import './ItemDetails.css';

export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      error: false,
      loader: false
    };
  };

  updateItem = () => {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loader: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loader: false
        });
      });
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData) {
      this.setState({ loader: true });
      this.updateItem();
    }
  };

  render() {
    let { item, error, loader } = this.state;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loader) {
      return <Loader />;
    }

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { itemId, getImageUrl } = this.props;
    const image = getImageUrl(itemId);

    return (
      <div className='itemDetails card'>
        <img className='itemImage'
          src={image}
          alt={`${item.name}`} />
        <div className='card-body'>
          <h4>{item.name}</h4>
          <ul className='list-group list-group-flush'>
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  };
};