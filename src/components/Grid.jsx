import React, { useState } from 'react';
import Letter from './Letter';

function Grid() {
  return (
    <div className="board">
      <div className="row">
        <Letter letterPos={0} attemptNo={0}></Letter>
        <Letter letterPos={1} attemptNo={0}></Letter>
        <Letter letterPos={2} attemptNo={0}></Letter>
        <Letter letterPos={3} attemptNo={0}></Letter>
        <Letter letterPos={4} attemptNo={0}></Letter>
      </div>
      <div className="row">
      <Letter letterPos={0} attemptNo={1}></Letter>
      <Letter letterPos={1} attemptNo={1}></Letter>
      <Letter letterPos={2} attemptNo={1}></Letter>
      <Letter letterPos={3} attemptNo={1}></Letter>
      <Letter letterPos={4} attemptNo={1}></Letter>
      </div>
      <div className="row">
      <Letter letterPos={0} attemptNo={2}></Letter>
      <Letter letterPos={1} attemptNo={2}></Letter>
      <Letter letterPos={2} attemptNo={2}></Letter>
      <Letter letterPos={3} attemptNo={2}></Letter>
      <Letter letterPos={4} attemptNo={2}></Letter>
      </div>
      <div className="row">
      <Letter letterPos={0} attemptNo={3}></Letter>
      <Letter letterPos={1} attemptNo={3}></Letter>
      <Letter letterPos={2} attemptNo={3}></Letter>
      <Letter letterPos={3} attemptNo={3}></Letter>
      <Letter letterPos={4} attemptNo={3}></Letter>
      </div>
      <div className="row">
      <Letter letterPos={0} attemptNo={4}></Letter>
      <Letter letterPos={1} attemptNo={4}></Letter>
      <Letter letterPos={2} attemptNo={4}></Letter>
      <Letter letterPos={3} attemptNo={4}></Letter>
      <Letter letterPos={4} attemptNo={4}></Letter>
      </div>
      <div className="row">
      <Letter letterPos={0} attemptNo={5}></Letter>
      <Letter letterPos={1} attemptNo={5}></Letter>
      <Letter letterPos={2} attemptNo={5}></Letter>
      <Letter letterPos={3} attemptNo={5}></Letter>
      <Letter letterPos={4} attemptNo={5}></Letter>
      </div>
    </div>
  )
}

export default Grid;