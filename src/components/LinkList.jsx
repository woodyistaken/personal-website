import style from './LinkList.module.css'

export default function LinkList({list}){
  
  function makeLinks(list){
      const links=[]
      for(let key in list){
        links.push(<a className={style.links} href={list[key]} key={key}>{key}</a>)
      }
      return links
    }
  return (
    <ul className={style.list}>
      {makeLinks(list)}
    </ul>
  )
}