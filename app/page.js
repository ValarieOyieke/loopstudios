import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Creations from './components/Creations'

export default function Home() {
  return (
    <main className={styles.main}> 
       <Header />
       <Hero />
       <Creations />
       <Footer />
   
    </main>
  )
}
