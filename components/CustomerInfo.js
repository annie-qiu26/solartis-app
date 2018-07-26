import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import CreateCustomer from '../utils/CreateCustomer';

export default class CustomerInfo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { renter_start_date, renter_end_date, renter_cars, destination, 
        effective_date, depart_date, return_date, plan_type, trip_cancellation, plan_name } = steps;
  
      this.setState({ renter_start_date,
        renter_end_date, renter_cars, destination, effective_date, depart_date,
        return_date, plan_type, trip_cancellation, plan_name });
    }
  
    render() {
      return (
        <CreateCustomer
            customer = {{
                firstName: this.state.first_name,
                lastName: this.state.last_name,
                dob: this.state.dob,
                address: this.state.address_1,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipcode,
                country: 'United States',
                phone: this.state.phone_number,
                email: this.state.email_address
            }}
            plan = {{
                destination: this.state.destination,
                departDate: this.state.depart_date,
                returnDate: this.state.return_date,
                planName: this.state.plan_name,
                planType: this.state.plan_type,
                tripCost: this.state.trip_cost,
                renterStart: this.state.renter_start_date,
                renterEnd: this.state.renter_end_date, 
                renterCars: this.state.renter_cars,
                effectiveDate: this.state.effective_date, 
                tripCancellation: this.state.trip_cancellation
            }}
        />
      );
    }
}

CustomerInfo.propTypes = {
    steps: PropTypes.object,
  };
  
CustomerInfo.defaultProps = {
    steps: undefined,
};