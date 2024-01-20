import styles from './featured.module.scss'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <b>Run Dev,</b> Exploring the Tech Universe – Your Guide to Innovation and Development
        </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/dell-laptop.jpeg" fill className={styles.image} alt='featured image'></Image>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.postTitle}>Full stack developer Road map</h2>
                <p className={styles.postDesc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nam debitis ut maiores harum beatae, tempora reprehenderit dignissimos suscipit magni. Aperiam labore tenetur ex. Placeat error exercitationem voluptatem corrupti! Asperiores.
                </p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured