import React from 'react';
import { connect } from 'react-redux';
import { addDemoEvent } from '../../actions/actionCreators';

const Demo = ({ addDemoEvent, demoState}) => {
  const onClicked = () => {
    console.log(demoState)
    addDemoEvent("Demo")
  }

  return (
    <div>
      <p>open console in browser</p>
      <button onClick={onClicked}>click here</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  demoState: state.demo
});

const mapDispatchToProps = dispatch => ({
  addDemoEvent: text => dispatch(addDemoEvent(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
