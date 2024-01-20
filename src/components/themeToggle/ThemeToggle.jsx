'use client'
import { useContext } from 'react'
import styles from './themeToggle.module.scss'
import { IoMoon } from "react-icons/io5"
import { IoSunny } from "react-icons/io5"
import { ThemeContext } from '../../context/ThemeContext.jsx'
import sound from '../../sounds/lightswitch.mp3'



const ThemeToggle = () => {

  function play(){
    new Audio(sound).play()
  }
    
    const{theme,toggle} = useContext(ThemeContext)
  return (
    <div  onClick={()=>{play();toggle();}} className={styles.container }  style={
        theme === "dark" ? { backgroundColor: "white"  } : { backgroundColor: "#0f172a"} }>
        <IoMoon className={styles.icon} title='Active Light Mode'/>
      <div className={styles.switch}
       style={theme ==="dark" ?{right:1,background:"#0f172a"}:{left:1,background:"white"}}>
      </div>
      <IoSunny className={styles.icon} title='Active Dark Mode'/>
    </div>
  )
}

export default ThemeToggle
            