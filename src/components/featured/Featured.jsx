import styles from './featured.module.scss'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <b>Run Dev,</b> StyleStrive: Unleashing the Fusion of Fashion, Food, Travel, and Code
        </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/blog-feture.webp" fill className={styles.image} alt='featured image'></Image>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.postTitle}>Where Trends, Tastes, and Code Converge in a Stylish Odyssey</h2>
                <p className={styles.postDesc}>
                Embark on a dynamic journey through the realms of style, fashion, food, travel, and coding. Where passion meets pixels, and every step is a stride towards a well-curated life of innovation and inspiration.
                </p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured