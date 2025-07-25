import style from './Footer.module.css'

export default function Footer({children}){
  return <div className={style.footer}>
    {children}
    <p className={style.copyrightLogo}>Copyright © 2025 Woody Aung</p>
    
  </div>
} 