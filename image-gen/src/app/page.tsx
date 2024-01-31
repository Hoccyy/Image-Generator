import styles from './page.module.css'
import ImageResult from './components/ImageResult'
import InputTextArea from './components/InputTextArea'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Generate Images</h1>
      <ImageResult/>
      <InputTextArea
        placeHolder='Enter image prompts here'
      />
    </main>
  )
}
