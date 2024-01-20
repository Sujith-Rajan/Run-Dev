import styles from './menuPosts.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const getData = async() => {

    try{
        const res = await fetch("http://localhost:3000/api/popularItmes")
        return res.json()
    }
    catch(err){
        console.log(err)
    }
}

const MenuPosts = async ({withImage}) => {
   const data = await getData()
   
  return (
    <div className={styles.items}>
        {data.map((item)=>(
        <Link href={`/posts/${item.slug}`} className={styles.item} key={item._id}>
            {withImage &&(
                <div className={styles.imgContainer}>
                    <Image src={item.img} fill className={styles.image} alt='cataogery image'></Image>
                </div>
            )
        }
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
            <h4 className={styles.postTitle}>{item.title}</h4>
            <div className={styles.detail}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>-{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
            </div>
        </div>
        </Link>
           ))} 
    </div>
  )
}

export default MenuPosts