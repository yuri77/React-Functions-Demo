import React from 'react'
import Display from './Display';
import Controls from './Controls';

function Subtract(props) {
  return (
    <div>
      <Display />
      <Controls />
      <button>Subtract</button>
    </div>
  )
}

export default Subtract;