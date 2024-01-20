
import styles from './navbar.module.scss'
import Link from 'next/link'
import { links } from '../../data.js'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import UserProfile from '../../components/userProfile/UserProfile'


const Navbar = () => {
 
  return (
    <div className={styles.container }>
        
        <div className={styles.logo}>
            rundev
        </div>
       
        <div className={styles.links}>
        <ThemeToggle/>
            {links.map((item) => (
                <Link href={item.url} key={item.link} className={styles.navLink}>
                   {item.link}
                </Link>
            ))}
         <AuthLinks/>  
         <UserProfile/>  
        </div>
      
    </div>
  )
}

export default Navbar