"use client"
import styles from './authLinks.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { links } from '../../data.js'
import { IoIosCloseCircle } from "react-icons/io"
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const[open,setOpen] = useState(false)
  const {status} = useSession()
  
  return (
    <>
        {status ==="unauthenticated" ?
         (<Link href="/login" className={styles.login}>Login</Link> )
        :( 
            <>
            
        <Link href="/write" className={styles.navBarWrite}>Write</Link>
        <span className={styles.logout} onClick={()=>signOut()}>Logout</span>
            
           </>
        )}
        <div className={styles.hamburger} onClick={()=> setOpen(true)}>
        <GiHamburgerMenu />
        </div>
        {open && (
          <div className={styles.hamburgerMenu}>
            {links.map((item)=>(
            <Link href={item.url} key={item.link} onClick={()=>setOpen(false)}>{item.link}</Link>
            ))}
             {status ==="unauthenticated" ?
         (<Link href="/login" onClick={()=>setOpen(false)} >Login</Link> )
        :( 
            <>
            
        <Link href="/write">Write</Link>
        <span >Logout</span>
            
           </>
        )}
        <IoIosCloseCircle className={styles.closeHamburger} onClick={()=>setOpen(false)}/>
          </div>
        )}
    </>
  )
}

export default AuthLinks