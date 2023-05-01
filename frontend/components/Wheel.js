import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export default function Wheel(props) {
  const dispatch = useDispatch();
  const wheelIndex = useSelector(state => state.wheel);

  const handleClickClockwise = () => {
    dispatch(moveClockwise());
  };

  const handleClickCounterClockwise = () => {
    dispatch(moveCounterClockwise());
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${wheelIndex === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>
  {wheelIndex === 0 && <span className="inner-cog">B</span>}
</div>
<div className={`cog ${wheelIndex === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>
  {wheelIndex === 1 && <span className="inner-cog">B</span>}
</div>

<div className={`cog ${wheelIndex === 2 ? 'active' : ''}`} style={{ "--i": 2 }}>
  {wheelIndex === 2 && <span className="inner-cog">B</span>}
</div>

<div className={`cog ${wheelIndex === 3 ? 'active' : ''}`} style={{ "--i": 3 }}>
  {wheelIndex === 3 && <span className="inner-cog">B</span>}
</div>
<div className={`cog ${wheelIndex === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>
  {wheelIndex === 4 && <span className="inner-cog">B</span>}
</div>
<div className={`cog ${wheelIndex === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>
  {wheelIndex === 5 && <span className="inner-cog">B</span>}
</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleClickCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClickClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
