import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import CreateCustomer from '../utils/CreateCustomer';

export default class CustomerInfo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        customer: {}
      }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { renter_start_date, renter_end_date, renter_cars, destination, 
        effective_date, depart_date, return_date, plan_type, trip_cancellation, plan_name } = steps;
  
      this.setState({ renter_start_date,
        renter_end_date, renter_cars, destination, effective_date, depart_date,
        return_date, plan_type, trip_cancellation, plan_name });
    
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', snapshot => {
          this.setState({customer: snapshot.val()});
        });
    }
  
    render() {
      return (
        <CreateCustomer
            customer = {this.state.customer}
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