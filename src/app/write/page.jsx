"use client"
import styles from './writePage.module.scss'


import { FaCloudUploadAlt } from "react-icons/fa"
import { useEffect, useState } from 'react';

import 'quill/dist/quill.snow.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {app} from '../../utils/firebase'
import dynamic from 'next/dynamic'
import {toast} from 'react-toastify'

const storage = getStorage(app);
const ReactQuillNoSSR = dynamic(() => import('react-quill'), { ssr: false });
const WritePost = () => {
 
  const {status} = useSession()
  const router = useRouter()

  const [value,setValue] = useState("")
  const [file,setFile] = useState("")
  const [media,setMedia] = useState("")
  const [title,setTitle] = useState("")
  const [catSlug,setCatSlug] = useState("")
  const [empty,setEmpty] = useState("")
  const [progress,setProgress] = useState("")

  useEffect(()=>{
    const upload = ()=> {
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage,name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
     (snapshot) => {
    
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  
    setProgress(progress)
   
  }, 
  (error) => {
    
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setMedia(downloadURL);
    });
  }
);
    }
    file && upload()
  },[file])

    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }
  
    if (status === "unauthenticated") {
      router.push("/");
      router.refresh()
    }

   
    
    const handleSubmit = async () => {
      try{
        if(!title || !value || !media || !catSlug){
          return setEmpty("Some Field are  missing *")
        }
        const sanitizeContent = new DOMParser().parseFromString(value,'text/html').body.textContent
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/post`,{
        method: "POST",
        body: JSON.stringify({
          slug: title,
          title,
          desc: sanitizeContent,
          img: media,
          catSlug: catSlug || "style"
        })
      })
      if(res.status === 200){
        const data = await res.json()
        toast.success("New post created")
        router.push(`/posts/${data.slug}`)
        router.refresh()
      }
    }
  
  catch(err){
    console.log(err)
  }
}
    
  return (
    <div className={styles.container}>
      {empty && <p className={styles.fieldValidate}>{empty}</p>}
     
        <input type="text" placeholder='Post Title' className={styles.input} onChange={(e)=>setTitle(e.target.value)}/>
        <select className={styles.select} onChange={(e)=>setCatSlug(e.target.value)}>
        <option value="">Select Catogery</option>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
        </select>
        <div className={styles.editor}>
            
           
            <div className={styles.add}>
                <input type="file" 
                 style={{zIndex:'99',opacity:'0'}}
                 onChange={(e)=>setFile(e.target.files[0])}/>
                 <div className={styles.addIconButtonGroud}>
                    <FaCloudUploadAlt className={styles.addButton} title="Choose an image " />
                    <span>Upload Image</span>
                    {progress && <p className={styles.progress}>Uploading {progress ? `${progress}% done`: 'paused'} </p>}  
                   
                    </div>
                    <button className={styles.publish} onClick={handleSubmit}>
            Publish
        </button>
            </div>
           
            {typeof window !== 'undefined' && typeof document !== 'undefined' && (
            <ReactQuillNoSSR
            theme='snow'
            value={value}
            onChange={setValue}
            className={styles.quil}
            placeholder='Tell your story...'/>
            )
            }
        </div>
    
    </div>
  )
}

export default WritePost