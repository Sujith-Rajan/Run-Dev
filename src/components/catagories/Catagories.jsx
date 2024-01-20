import styles from './catagories.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const getData = async() => {
  try{
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`,{
          cache:'no-store'
        })
        return res.json()
  }
  catch(err){
    console.log(err)
  }
}

const Catagories = async () => {
  const data =await getData()
  
  return (
    <>
    {data &&
    <div className={styles.container}>
        <h2 className={styles.title}>Popular Categories</h2>
        <div className={styles.catagories}>
          {data?.map((item)=>(
            <Link href={`/blog?cat=${item.slug}`} className={`${styles.catogory} ${styles[item.slug]}`} key={item._id}>
              {item.img && 
            <Image src={item.img} alt='catagory image' width={50} height={50} className={styles.image}></Image>
          }
             {item.title}
            </Link>
         ))}
        </div>
      
    </div>
  }
  </>
  )
}

export default Catagories