import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default class CustomerInfo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { first_name, last_name } = steps;
  
      this.setState({ first_name, last_name });
    }
  
    render() {
      const { first_name } = this.state;
      return (
        <Text>{first_name.value}</Text>
      );
    }
}

CustomerInfo.propTypes = {
    steps: PropTypes.object,
  };
  
CustomerInfo.defaultProps = {
    steps: undefined,
};