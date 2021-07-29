import Image from 'next/image'
import styles from '../styles/TourDates.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Tour Dates👇</h1>
      <a href="/" className={styles.card}>
        <h2>Back Home &rarr;</h2>
      </a>
    </div>
  )
}
