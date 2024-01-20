"use client"
import styles from './login.module.scss'
import { FcGoogle } from "react-icons/fc"
import { MdOutlineFacebook } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const {data,status} = useSession()
  const router = useRouter()
  console.log(data,status)
  if(status === 'loading'){
    return <p>Loading....</p>
  }
  if(status === 'authenticated'){
    router.push('/')
    router.refresh()
  }
  return (
    <div className={styles.container}>
    
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Login</h1>
            <div className={styles.socialButton} onClick={()=>signIn("google")}>
            <FcGoogle className={styles.icon} />
                <p>Sign In with Google</p>
            </div>
            <div className={styles.socialButton} onClick={()=>signIn("github")}>
            <FaGithub  className={styles.icon} />
                <p>Sign In with Github</p>
                </div>
            <div className={styles.socialButton}>
            <MdOutlineFacebook  className={styles.icon}/>
            <p>Sign In with Facebook</p>
            </div>
        </div>
    </div>
  )
}

export default Login