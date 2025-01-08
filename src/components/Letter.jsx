import React, { useContext } from 'react';
import { AppContext } from '../App';

function Letter({ letterPos, attemptNo}) {
    const { grid } = useContext(AppContext);
    const letter = grid[attemptNo][letterPos];
  return (
    <div className='letter'></div>
  )
}

export default Letter;