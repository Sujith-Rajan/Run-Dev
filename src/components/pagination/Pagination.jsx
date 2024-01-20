"use client"
import styles from './pagination.module.scss'
import { useRouter } from 'next/navigation'

const Pagination = ({page,cat,hasPrev,hasNext}) => {
  const router = useRouter()
  
  return (
    <div className={styles.container }>
        <button className={styles.button} 
        disabled={!hasPrev}
        onClick={()=> router.push(`?page=${page - 1}&cat=${cat}`)}>
            Previous
        </button>
        <button className={styles.button} 
        disabled={!hasNext}
        onClick={()=> router.push(`?page=${page + 1}&cat=${cat}`)}>
            Next
        </button>
    </div>
  )
}

export default Pagination