import './App.css'
import { Profile } from './components/Context/Profile'
import { ScoreCard } from './components/Context/ScoreCard'

import { Profile as ProfileZ } from './components/Zustand/Profile'
import { ScoreCard as ScoreCardZ } from './components/Zustand/ScoreCard'

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Profile />
      <ScoreCard />

      <h1>Zustand</h1>
      <ProfileZ />
      <ScoreCardZ />
    </div>
  )
}

export default App
