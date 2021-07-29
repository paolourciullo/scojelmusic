import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scott Jelinek</title>
        <meta name="description" content="Musician in the Midwest, USA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.youtube.com/channel/UCaAKPJNbLEUth3udXSEoNtA">
            Scott Jelinek Music
          </a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Image
            src="/scojelimg1.png"
            alt="scojel on stage"
            width={154}
            height={144}
          />
          <a
            href="https://www.youtube.com/channel/UCaAKPJNbLEUth3udXSEoNtA"
            className={styles.card}
          >
            <h2>YouTube &rarr;</h2>
            <p>A link to all of my Youtube content.</p>
          </a>

          <a href="/TourDates" className={styles.card}>
            <h2>Tour Dates &rarr;</h2>
            <p>A list of upcoming tour dates. Come see me live!</p>
          </a>

          <a href="https://www.facebook.com/sajelinek" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>See photos from some of my shows!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Rep &rarr;</h2>
            <p>Some of the tunes I play.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          This app was made with{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
