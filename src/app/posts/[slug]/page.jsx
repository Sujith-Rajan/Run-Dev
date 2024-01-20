import Menu from '../../../components/menu/Menu.jsx';
import styles from './singlePost.module.scss'
import Image from 'next/image'
import Comments from '../../../components/comments/Comments.jsx';
import { FaEye } from "react-icons/fa";

const getData = async(slug) => {
    try{
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post/${slug}`,{
          cache:'no-store'
        })
        return res.json()
    }
    catch(err){
      console.log(err)
    }
}

const SingleProduct = async ({params}) => {
  const {slug} = params
  
  const data = await getData(slug);
  const formataDate = new Date(data.createdAt).toLocaleDateString('en-GB')
 
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{data?.title}</h1>
              <div className={styles.user}>
                {data && (
                  <div className={styles.userImgContainer}>
                    <Image src={data?.user?.image} fill alt="use image" aly='single product'  className={styles.avatar}></Image>
                  </div>
                )}
                <div className={styles.userTextContainer}>
                  <span className={styles.username}>{data?.user?.name}</span>
                  <span className={styles.date}>{formataDate}</span>
                </div>
              </div>
            </div>
            {data &&(
              <div className={styles.imgContainer}>
                <Image src={data.img} fill alt='post image' className={styles.image}></Image>
              </div>
            )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
            {data.views !==0 && <div className={styles.views}><FaEye /> {data.views}</div>}
              <div className={styles.comment}>
               <Comments postSlug={slug}/>
              </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SingleProduct