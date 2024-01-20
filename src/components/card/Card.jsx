import styles from './card.module.scss'
import Image from 'next/image'
import Link from 'next/link'



const Card =  ({key,item}) => {
    const formattedDate = new Date(item.createdAt).toLocaleDateString('en-GB');

  return (
    <div className={styles.container}>
        {item.img &&
        <div className={styles.imgContainer}>
            <Image src={item.img} fill className={styles.image} alt='item image'></Image>
        </div>
        }
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{formattedDate} -{""}</span>
                <span className={styles.catogery}>{item.catSlug}</span>
            </div>
            <Link href={`posts/${item.slug}`}>
                <h3 className={styles.title}>{item.title}</h3>
            </Link>
            <p>{item.desc.slice(0,60)} .....</p>
            <div>
               
                <Link href={`posts/${item.slug}`} className={styles.link} >
                 Read More
                </Link>
                
            </div>
        </div>
     </div>
  )
}

export default Card