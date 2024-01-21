"use client" 
import styles from './comments.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import useSwr from 'swr'
import { useState } from 'react'


const fetcher = async (url) => {
    try{
    const res = await fetch(url)
   
    if(!res){
        throw new Error('Failed to fetch comments');
    }
    const data = await res.json()
    return data
}
catch(err){
    console.log(err)
    throw new Error('Failed to fetch comments');
}
}

const Comments =({postSlug}) => {
    const {status} = useSession()
    
    const {data,mutate,isLoading} = useSwr(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
        fetcher)

    const [addComment,setAddComment] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments",{
            method:"POST",
            body: JSON.stringify({addComment,postSlug})
        })
        
        mutate();
    }
    
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated'  ? (
                <div className={styles.write}>
                    <textarea
                     placeholder='Write a comment' 
                     className={styles.input}
                     onChange={(e)=>setAddComment(e.target.value)}
                     ></textarea>
                    <button
                     className={styles.button}
                     onClick={handleSubmit}
                     >
                        Send
                    </button>
                </div>
            )
        : (
            <Link href=''>Login to write a comment</Link>
        )
        }
        <div className={styles.comments}>
            {isLoading  ? <p>Loading</p>
            :
               data?.map((item,index) => (
                <div className={styles.comment} key={item._id || index}>
                    <div className={styles.user}>
                        <Image src={item?.user?.image} alt='user image' width={40} height={40} className={styles.image}></Image>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>{item?.user?.name}</span>
                            <span className={styles.date}>{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
                        </div>
                    </div>
                    <p className={styles.desc}>{item.desc}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comments