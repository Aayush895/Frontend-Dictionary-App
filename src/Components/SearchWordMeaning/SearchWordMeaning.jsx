/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './SearchWordMeaning.module.css'
import WordMeaning from '../WordMeaning/WordMeaning'

function SearchWordMeaning({ font, toggleTheme }) {
  const [input, setInput] = useState('')
  const [wordMeaning, setwordMeaning] = useState('')

  function handlesearchInput(e) {
    setInput(e.target.value)
  }

  async function handleWordMeaning(e) {
    e.preventDefault()
    const fetchMeaning = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    )

    const fetchedData = await fetchMeaning.json()
    setwordMeaning(fetchedData)
  }

  return (
    <>
      <div
        id={!toggleTheme ? styles.searchContainer : styles.darksearchContainer}
      >
        <form action="" onSubmit={handleWordMeaning}>
          <input
            type="text"
            name="search"
            value={input}
            onChange={handlesearchInput}
            style={{ fontFamily: font }}
          />
        </form>
        <img src="images/icon-search.svg" />
      </div>

      <WordMeaning
        meaning={wordMeaning}
        font={font}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default SearchWordMeaning
