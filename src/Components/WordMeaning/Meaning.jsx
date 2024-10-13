/* eslint-disable react/prop-types */
import styles from './Meaning.module.css'
import { IoMdPlay } from 'react-icons/io'

function Meaning({ meaning, handleAudio, toggleTheme }) {
  console.log(meaning)
  return (
    <>
      <div id={styles.meaningContainer}>
        <div id={styles.headerContainer}>
          <div id={!toggleTheme ? styles.header : styles.darkHeader}>
            <h1>{meaning[0]?.word}</h1>
            <p>{meaning[0]?.phonetic}</p>
          </div>
          <div id={styles.audioContainer} onClick={handleAudio}>
            <IoMdPlay size={20} />
          </div>
        </div>
      </div>
      <div id={styles.body}>
        {meaning[0]?.meanings.map((diffMeaning, idx) => (
          <div
            key={idx}
            id={
              !toggleTheme
                ? styles.differentMeaningsContainer
                : styles.darkdifferentMeaningsContainer
            }
          >
            <div id={styles.partOfSpeechContainer}>
              <p>{diffMeaning?.partOfSpeech} </p>
              <div></div>
            </div>
            <p>Meaning</p>
            <ul id={!toggleTheme ? styles.meaningList : styles.darkMeaninglist}>
              {diffMeaning?.definitions.map((defineWord, idx) => (
                <li key={idx}>{defineWord?.definition}</li>
              ))}
            </ul>

            {diffMeaning?.synonyms[0] != undefined ? (
              <div id={styles.synonymContainer}>
                <p>
                  Synonyms &nbsp; &nbsp; <span>{diffMeaning?.synonyms[0]}</span>
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div id={styles.horizontalLine}></div>
    </>
  )
}
export default Meaning
