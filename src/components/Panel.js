import React from 'react'
import Display from './Display';
import Controls from './Controls';

function Panel(props) {
  return (
    <div>
      <Display />
      <Controls />
      <button className="btn-type">{props.type}</button>
    </div>
  )
}

export default Panel
