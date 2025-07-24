import style from './Title.module.css'

export default function Title({title}){
  return <div id={title} className={style.container}>
    <h1 className={style.title}>{title}</h1>
    <div className={style.underline}></div>
  </div>
}