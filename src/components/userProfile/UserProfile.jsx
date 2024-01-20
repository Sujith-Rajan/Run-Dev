'use client'
import styles from './userprofile.module.scss'
import {useSession} from 'next-auth/react'
import Image from 'next/image'
const UserProfile = () => {
    const {data:session,status} = useSession()
  return (
   
    <div>
         {session?.user && 
         <div className={styles.user}>
     <Image src={session?.user?.image} width={30} height={30} className={styles.image} alt='user image'></Image>
     <span className={styles.name}>{session?.user?.name}</span>
     </div>
    }
    </div>
    
  )
}

export default UserProfile
