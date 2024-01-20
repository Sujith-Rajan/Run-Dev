import styles from './homePage.module.scss'
import Featured from '../components/featured/Featured.jsx'
import Catagories from '../components/catagories/Catagories.jsx'
import CardList from '../components/cardList/CardList.jsx'
import Menu from '../components/menu/Menu.jsx'

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page ) || 1 
  return (
   <div className={styles.container}>
      <Featured/>
      <Catagories/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
   </div>
  )
}
