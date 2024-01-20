import styles from './footer.module.scss'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaHeadSideVirus } from "react-icons/fa"
import { links } from '../../data.js'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
          <FaHeadSideVirus />
           <span>RUNDEV</span>
          </div>
          <p> Embark on a dynamic journey through the realms of style, fashion, food, travel, and coding. Where passion meets pixels, and every step is a stride towards a well-curated life of innovation and inspiration.</p>
          <div className={styles.social}>
        <FaFacebook style={{color:'blue'}}/>
        <FaInstagram style={{color:'red'}}/>
        <FaGithub />
        <FaLinkedin  style={{color:'blue'}}/>
        </div>
        </div>
        <div className={styles.links}>
            <div className={styles.pages}>
              <span className={styles.linkTitle}>Links</span>
              {links.map((item)=>(
                <Link href={item.url} key={item.link}>{item.link}</Link>
              ))}
            </div>
            <div className={styles.pages}>
            <span className={styles.linkTitle}>Tags</span>
                <Link href='/'>Blog</Link>
                <Link  href='/'>Website</Link>
            </div>
            <div className={styles.pages}>
            <span className={styles.linkTitle}>Dev</span>
            <Link href='/'>Github</Link>
            <Link  href='/'>Dribble</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer