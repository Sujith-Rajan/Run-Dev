import CardList from '../../components/cardList/CardList.jsx'
import styles from './pageBlog.module.scss'
import Menu from '../../components/menu/Menu.jsx'

const page = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList cat={cat} page={page}/>
            <Menu/>
        </div>
    </div>
  )
}

export default page