import React, { useState } from 'react'

const RollDice = ({currentDice,rollDice}) => {
    
    
  return (
    <div className='grid grid-col justify-items-center mt-15'>
      <div 
      onClick={rollDice}
      className='cursor-pointer '>
        <img src={`Images/dice_${currentDice}.png`} alt="" />
      </div>
      <p className='text-2xl font-bold'>Click on Dice to Roll</p>
    </div>
  )
}

export default RollDice
