import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import styles from './cardList.module.scss'

const getData = async(page,cat) => {
  try{
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post?page=${page}&cat=${cat || ""}`,{
          cache:'no-store'
        })
        return res.json()
  }
  catch(err){
    console.log(err)
  }
}

const CardList = async ({page,cat}) => {

  const {posts,count} = await getData(page,cat)

  const POST_PER_PAGE = 2
 
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1 ) + POST_PER_PAGE < count;

  return (
    <div className={styles.container }>
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.posts}>
          {posts?.map((item)=>(
            <Card key={item._id} item={item}/>
            ))}
        </div>
        <Pagination page={page} cat={cat} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList