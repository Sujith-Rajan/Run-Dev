import MenuCategory from '../menuCategories/MenuCategory'
import MenuPosts from '../menuPosts/MenuPosts'
import styles from './menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
      <span className={styles.subtitle}>{"What's hot"}</span>
      <h2 className={styles.title}>Most Popular</h2>
       <MenuPosts withImage={false}/>
       </div>
       <div>
      <h3 className={styles.subtitle}>Discover by topic</h3>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategory/>
      </div>
      <div>
      <span>Chose by the Editor</span>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts withImage={true}/>
      </div>
      </div>
  )
}

export default Menu