/* eslint-disable react/prop-types */
import styles from './EmptyInput.module.css'

function EmptyInput({toggleTheme}) {
  return (
    <div id={styles.emptyInputContainer} style={{color: toggleTheme ? '#fff' : 'black'}}>
      <p>Please enter a word in the input field to fetch its meaning</p>
    </div>
  )
}
export default EmptyInput
