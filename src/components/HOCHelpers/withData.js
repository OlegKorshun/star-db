import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator';
import Loader from '../Loader';

const withData = (View) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        data: null,
        loading: true,
        error: false
      };
    };

    update = () => {
      this.setState( {
        loading: true,
        error: false
      });

      this.props
        .getData()
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    };

    componentDidMount() {
      this.update();
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    };

    render() {
      const { data, loading, error } = this.state;
      
      if (loading) {
        return <Loader />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;