/* eslint-disable react/prop-types */
import EmptyInput from './EmptyInput'
import Meaning from './Meaning'
import styles from './WordMeaning.module.css'

function WordMeaning({ meaning, font, toggleTheme }) {
  let audio = new Audio(meaning[0]?.phonetics[2]?.audio)

  function handleAudio() {
    audio.play()
  }

  return (
    <div id={styles.container} style={{fontFamily: font}}>
      {!meaning ? (
        <EmptyInput toggleTheme={toggleTheme}/>
      ) : (
        <Meaning meaning={meaning} handleAudio={handleAudio} toggleTheme={toggleTheme}/>
      )}
    </div>
  )
}

export default WordMeaning
