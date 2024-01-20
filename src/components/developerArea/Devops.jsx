import styles from './developer.module.scss'

const Devops = () => {
    const date = new Date();
  const year = date.getFullYear();
  const developerName = 'Sujith-Rajan';
  return (
    <div className={styles.container}>
      <span>&#169;<span>{year}</span>-Run Dev.All right reserved by <span className={styles.developerName}>{developerName}</span></span>
    </div>
  )
}

export default Devops
