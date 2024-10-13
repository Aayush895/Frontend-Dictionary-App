/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({toggleTheme, settoggleTheme}) {
  return (
    <div id={styles.buttonContainer} style={{backgroundColor: !toggleTheme ? '#979797' : '#A445ED'}}>
      <div
        id={styles.buttonToggle}
        onClick={() => settoggleTheme(!toggleTheme)}
        style={{ left: !toggleTheme ? '0.25rem' : '1.75rem' }}
      ></div>
    </div>
  )
}
export default Button
