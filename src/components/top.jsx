import style from './top.module.css'
import { useEffect } from 'react'


export default function Top(){
  useEffect(()=>{
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  })
  return <div className={style.container}>
    <h1 className={style.name}>Woody Aung</h1>
    <p className={style.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati enim at distinctio, eius necessitatibus iusto quos officiis, provident in libero, totam inventore. Iure necessitatibus similique, soluta libero quis laboriosam.</p>
    
    <a href="" className={style.links}>Resume</a>
    <a href="" className={style.links}>Email</a>
  

  </div>
}