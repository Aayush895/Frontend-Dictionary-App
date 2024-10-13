/**
 * TODO: Making it responsive.
 */
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import SearchWordMeaning from './Components/SearchWordMeaning/SearchWordMeaning'

function App() {
  const [font, setFont] = useState('sans-serif')
  const [toggleTheme, settoggleTheme] = useState(false)

  return (
    <div id={!toggleTheme ? 'lightBackground' : 'darkBackground'}>
      <Navbar
        font={font}
        setFont={setFont}
        toggleTheme={toggleTheme}
        settoggleTheme={settoggleTheme}
      />
      <SearchWordMeaning font={font} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App
