import styles from './developer.module.scss'

const Devops = () => {
    const date = new Date();
  const year = date.getFullYear();
 
  return (
    <div className={styles.container}>
      <span>&#169;<span>{year}</span>-Run Dev.All right reserved by <span className={styles.developerName}>Sujith Rajan</span></span>
    </div>
  )
}

export default Devops
