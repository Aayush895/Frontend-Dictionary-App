/* eslint-disable react/prop-types */
import Button from '../Button/Button'
import styles from './Navbar.module.css'
function Navbar({font, setFont, toggleTheme, settoggleTheme}) {
  function handleFontchange(e) {
    setFont(e.target.value)
  }
  return (
    <>
      <div id={styles.navBarContainer} style={{fontFamily: font}}>
        <div id={styles.logo}>
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div id={styles.fontdropDown}>
          <div id={!toggleTheme ? styles.dropDown : styles.darkDropdown}>
            <select name="font-select" id={styles.fontSelect} value={font} onChange={handleFontchange}>
              <option value="sans-serif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
          </div>

          <div id={styles.theme}>
            <Button toggleTheme={toggleTheme} settoggleTheme={settoggleTheme}/>
            <img src="images/icon-moon.svg" alt="theme-dark" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
