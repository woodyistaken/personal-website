import style from './Top.module.css'


export default function Top(){
  
  return <div className={style.container}>
    <h1 className={style.name}>Woody Aung</h1>
    <p className={style.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati enim at distinctio, eius necessitatibus iusto quos officiis, provident in libero, totam inventore. Iure necessitatibus similique, soluta libero quis laboriosam.</p>
    <div className={style.linkContainer}> 
      <a href="" className={style.links}>Resume</a>
      <a href="" className={style.links}>Email</a>
    </div>
  

  </div>
}