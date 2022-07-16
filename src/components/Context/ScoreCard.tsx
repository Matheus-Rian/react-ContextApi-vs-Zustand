import React, { useContext } from 'react'
import { UserContext } from '../../store/UserContext'

export const ScoreCard = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <input 
        type="number" 
        value={context?.user.score}
        onChange={(ev) => context?.updateUser({ score: Number(ev.target.value) })}
        placeholder="ScoreCard"
      />
    </div>
  )
}
