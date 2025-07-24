import style from './Row.module.css'
import { useState,useEffect } from 'react'

const changeLayoutWidth=1000;
export default function Row({imgUrl,title,imgLeft,children,alt}){
  const [screenWidth,setScreenWidth]=useState(window.innerWidth)
  const isShrink=screenWidth<=changeLayoutWidth

  useEffect(()=>{
    const handleScreenChange=()=>{setScreenWidth(window.innerWidth)}

    window.addEventListener('resize',handleScreenChange)
    return ()=>{window.removeEventListener('resize',handleScreenChange)}
  })

  const imageElem=(<div className={style.imgContainer}>
    <img className={style.img} alt={alt} src={imgUrl}></img>
    </div>)
  return<div className={`${style.container} ${isShrink?style.containerShrink:null}`}>
   {imgLeft || isShrink?imageElem:null}
   <div className={style.textContainer}>
    <h1 className={style.title}>{title}</h1>
   {children}
   </div>
   {!imgLeft && !isShrink?imageElem:null}
  </div>
}