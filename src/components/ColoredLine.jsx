import style from './ColoredLine.module.css'

export default function ColoredLine({color}){
  return <div className={style.line} style={{backgroundColor:color}}>

  </div>
}