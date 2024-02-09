import React from 'react';
import PropTypes, { any } from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/fuelSavingsActions';
import FuelSavingsForm from '../FuelSavingsForm';

function FuelSavingsPage (props) {

    return (
      <FuelSavingsForm
        onSaveClick={ (e)=> props.actions.saveFuelSavings(props.fuelSavings)}
        onChange={(e)=> props.actions.calculateFuelSavings(props.fuelSavings, e.target.name, e.target.value)}
        fuelSavings={props.fuelSavings}
      />
    );
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
