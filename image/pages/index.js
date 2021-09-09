import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
    const src = `https://noluckbd.com/test.jpg`;
    const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next js image manipulation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>When image not found then show default image</h3>
 

        <div className={styles.grid}>          
         
          <Image src={imgSrc}
                alt={'Sample'}
                 width={300} 
                 height={300}
                 onError={()=> {
                       setImgSrc('https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'); 
                }}
            />
 
        </div>
      </main>

    
    </div>
  )
}
