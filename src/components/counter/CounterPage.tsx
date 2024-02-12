import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/counterAction';
import Counter from './Counter';

function CounterPage(props) {
    return (
      <Counter
      count = {props.counter}
      increment={props.actions.increment}
      decrement={props.actions.decrement}/>
    );
}

CounterPage.propTypes = {
    actions: PropTypes.object.isRequired,
    counter: PropTypes.object.isRequired
  };

function mapStateToProps(state) {
  return {
    counter: state.counter

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
)(CounterPage);
